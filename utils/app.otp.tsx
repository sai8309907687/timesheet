import { signal } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import React, { useEffect, useCallback } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import TypeButton from '@/types/type.button';
// import TypeIcon from '@/types/type.icon';
import { ShowToast } from '@/utils/app.event';
import AppHttp, { MsUrl } from '@/utils/app.http';
import OtpInput from '../components/otp-input';

/* ------------------------------------------------------------------ */
/* TYPES */
/* ------------------------------------------------------------------ */

export type OtpModalState = {
  showModal: boolean;
  title: string;
  userid: string;
};

export type OtpFormData = {
  otp: string;
};

export type SendOtpResponse = {
  data: {
    message: string;
    oid: string;
    uid: string;
  };
};

export type VerifyOtpResponse = {
  data: {
    message: string;
    oid: string;
    uid: string;
  };
};

export type OtpCallbackProps = {
  oid: string;
  uid: string;
  otp: string;
};

export type AppOtpProps = {
  onOtpCallback?: (data: OtpCallbackProps) => void;
  onCancel?: () => void;
};

/* ------------------------------------------------------------------ */
/* SIGNALS */
/* ------------------------------------------------------------------ */

export const OtpModalSignal = signal<OtpModalState>({
  showModal: false,
  title: '',
  userid: '',
});

export const OtpLoadingSignal = signal<boolean>(false);
export const ResendLoadingSignal = signal<boolean>(false);
export const ResendCountdownSignal = signal<number>(0);

/** ✅ THIS STORES oid + uid */
export const OtpSessionSignal = signal<{
  oid: string;
  uid: string;
} | null>(null);

/* ------------------------------------------------------------------ */
/* API FUNCTIONS */
/* ------------------------------------------------------------------ */

const sendOtpApi = async (userid: string): Promise<SendOtpResponse | null> => {
  try {
    OtpLoadingSignal.value = true;
    const response = await AppHttp.Post(MsUrl.sor + '/auth/send-otp', { userid });
    return response as SendOtpResponse;
  } catch (error: unknown) {
    const err = error as { error?: { message?: string } };
    const message = err?.error?.message || 'Failed to send OTP';
    ShowToast(message, 'danger');
    return null;
  } finally {
    OtpLoadingSignal.value = false;
  }
};

const verifyOtpApi = async (
  otp: string,
  oid: string,
  uid: string,
): Promise<VerifyOtpResponse | null> => {
  try {
    OtpLoadingSignal.value = true;
    const response = await AppHttp.Post('/auth/verify-otp', { otp, oid, uid });
    return response as VerifyOtpResponse;
  } catch (error: unknown) {
    console.log(error);
    return null;
  } finally {
    OtpLoadingSignal.value = false;
  }
};

/* ------------------------------------------------------------------ */
/* HELPERS */
/* ------------------------------------------------------------------ */

export const showOtpModal = (title: string, userid: string) => {
  OtpModalSignal.value = {
    showModal: true,
    title,
    userid,
  };
};

export const hideOtpModal = () => {
  OtpModalSignal.value = {
    showModal: false,
    title: '',
    userid: '',
  };
  ResendCountdownSignal.value = 0;
  OtpSessionSignal.value = null;
};

/* ------------------------------------------------------------------ */
/* COMPONENT */
/* ------------------------------------------------------------------ */

export const AppOtp: React.FC<AppOtpProps> = ({ onOtpCallback, onCancel }) => {
  useSignals();

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<OtpFormData>({
    defaultValues: {
      otp: '',
    },
  });

  const handleSendOtp = useCallback(async () => {
    if (OtpLoadingSignal.value) return;
    const response = await sendOtpApi(OtpModalSignal.value.userid);
    if (response?.data) {
      OtpSessionSignal.value = {
        oid: response.data.oid,
        uid: response.data.uid,
      };
      ShowToast(response.data.message, 'success');
      ResendCountdownSignal.value = 180; // 3 minutes countdown
    } else {
      ShowToast("Failed to send OTP. Please try again.", 'danger');
    }
  }, []);

  const otpValue = useWatch({
    control,
    name: 'otp',
  });
  const isSubmitDisabled = !otpValue || otpValue.length < 6 || OtpLoadingSignal.value;

  const showOtpModalValue = OtpModalSignal.value.showModal;
  const otpUserid = OtpModalSignal.value.userid;

  // Send OTP when modal opens
  useEffect(() => {
    if (showOtpModalValue && otpUserid) {
      handleSendOtp();
    }
  }, [showOtpModalValue, otpUserid, handleSendOtp]);

  const resendCountdown = ResendCountdownSignal.value;

  // Countdown timer for resend
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendCountdown > 0) {
      interval = setInterval(() => {
        ResendCountdownSignal.value = ResendCountdownSignal.value - 1;
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [resendCountdown]);

  const handleResendOtp = async () => {
    if (ResendCountdownSignal.value > 0) return;
    ResendLoadingSignal.value = true;
    await handleSendOtp();
    ResendLoadingSignal.value = false;
  };

  const onSubmit = async (data: OtpFormData) => {
    if (!OtpSessionSignal.value) {
      ShowToast("Session expired", 'danger');
      return;
    }

    const response = await verifyOtpApi(
      data.otp,
      OtpSessionSignal.value.oid,
      OtpSessionSignal.value.uid,
    );

    if (response?.data) {
      ShowToast(response.data.message, 'success');
      onOtpCallback?.({
        oid: response.data.oid,
        uid: response.data.uid,
        otp: data.otp,
      });
      handleCloseModal();
    } else {
      ShowToast("Failed to send OTP. Please try again.", 'danger');
    }
  };

  const handleCancelAction = () => {
    onCancel?.();
    handleCloseModal();
  };

  const handleCloseModal = () => {
    hideOtpModal();
    reset();
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!OtpModalSignal.value.showModal) {
    return null;
  }

  return (
    <div className='modal modal-open'>
      <div className='modal-box relative bg-white dark:bg-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-none max-w-md p-8 rounded-3xl'>
        {/* Header */}
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold text-gray-900 dark:text-white tracking-tight'>
            {OtpModalSignal.value.title || 'OTP Verification'}
          </h2>
          <TypeButton
            variant='ghost'
            className='btn-xs btn-circle text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors'
            onPress={handleCancelAction}
            name='X'
            label=''
          />
        </div>

        {/* Body */}
        <div className='flex flex-col space-y-4 text-black dark:text-white'>
          <div className='text-center space-y-1'>
            <p className='text-lg font-bold text-gray-900 dark:text-white'>{OtpModalSignal.value.userid}</p>
            <p className='text-sm text-gray-500 dark:text-gray-400 max-w-xs mx-auto leading-relaxed'>
              Please enter the OTP sent to your registered mobile number to verify your identity.
            </p>
          </div>

          <div className='flex justify-center'>
            <OtpInput
              length={6}
              value={otpValue}
              onValueChange={(value: string) => {
                setValue('otp', value);
                if (value.length === 6) {
                  handleSubmit(onSubmit)();
                }
              }}
            />
          </div>

          {errors.otp && (
            <p className='text-error text-sm text-center font-medium'>{errors.otp.message}</p>
          )}

          <div className='flex justify-center items-center space-x-2 text-sm'>
            <span className='text-gray-900 dark:text-white'>Didn&apos;t receive the code?</span>
            <TypeButton
              variant='ghost'
              onPress={handleResendOtp}
              disabled={ResendCountdownSignal.value > 0 || ResendLoadingSignal.value}
              className='text-blue-600 font-semibold hover:underline disabled:text-blue-500 disabled:no-underline px-0 min-h-0 h-auto'
              label={ResendCountdownSignal.value > 0
                ? `Resend in ${formatTime(ResendCountdownSignal.value)}`
                : ResendLoadingSignal.value
                  ? 'Sending...'
                  : 'Resend OTP'}
            />
          </div>
        </div>

        {/* Footer */}
        <div className='modal-action flex justify-center gap-4 mt-6 p-0'>
          <TypeButton
            action='default'
            variant='outline'
            className='border-2 hover:text-white rounded-xl flex-1 normal-case text-base font-semibold h-12 transition-all duration-200'
            onPress={handleCancelAction}
            disabled={OtpLoadingSignal.value}
            label='Cancel'
          />
          <TypeButton
            action='primary'
            className='text-white border-none rounded-xl flex-1 normal-case text-base font-semibold h-12 transition-all duration-200'
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitDisabled}
            label={OtpLoadingSignal.value ? 'Verifying...' : 'Verify'}
          />
        </div>
      </div>

      {/* Backdrop */}
      <div className='modal-backdrop bg-black/20 backdrop-blur-[2px]' onClick={handleCancelAction}>
        <button className='cursor-default'>close</button>
      </div>
    </div>
  );
};

export default AppOtp;
