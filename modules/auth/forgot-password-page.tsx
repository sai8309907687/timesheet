'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSignal } from '@preact/signals-react';

import TypeButton from '@/types/type.button';
import { TypeInput } from '@/types/type.input';

import { RouterChange, ShowToast } from '@/utils/app.event';
import { AppRouter } from '@/utils/app.router';
import { ForgotPasswordStep, ForgotPasswordType } from './common/types';
import { resetPasswordService, userIdSignal } from './common/services';

import AppOtp, { showOtpModal, OtpCallbackProps } from '@/utils/app.otp';
import { ForgotPasswordValidate } from './common/validate';
import { AuthLayout } from '@/layouts/auth-layout';

export default function ForgotPassword() {
  const [step, setStep] = React.useState<ForgotPasswordStep>(1);
  const isLoading = useSignal(false);

  /** OTP id from AppOtp */
  const otpIdSignal = useSignal('');

  /** React Hook Form */
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordType>({
    defaultValues: {
      userid: '',
      password: '',
    },
  });

  /* ---------------------------------- */
  /* COMMON */
  /* ---------------------------------- */

  const onCancel = () => {
    RouterChange(AppRouter.SIGN_IN);
  };

  /* ---------------------------------- */
  /* STEP 1 – SEND OTP */
  /* ---------------------------------- */

  const onSubmitEmail = async (data: ForgotPasswordType) => {
    try {
      userIdSignal.value = data.userid;
      ShowToast('OTP sent to your email', 'success');
      setStep(2);
      showOtpModal('Verify OTP', data.userid);
    } catch {
      ShowToast('Error sending OTP', 'danger');
    }
  };

  /* ---------------------------------- */
  /* OTP CALLBACK */
  /* ---------------------------------- */

  const onOtpCallback = (data: OtpCallbackProps) => {
    console.log('OTP verified:', data);
    otpIdSignal.value = data.oid ?? '';
    setStep(3);
  };

  /* ---------------------------------- */
  /* STEP 3 – RESET PASSWORD */
  /* ---------------------------------- */

  const onSubmitPassword = async (data: ForgotPasswordType) => {
    console.log('ResetPassword data:', data);

    isLoading.value = true;
    try {
      const payload = {
        userid: userIdSignal.value,
        password: btoa(data.password),
        otpId: otpIdSignal.value,
      };

      console.log('ResetPassword payload:', payload);

      const resp = await resetPasswordService(payload) as { message?: string };

      if (resp?.message === 'Password reset successful.') {
        ShowToast('Password reset successful', 'success');
        setStep(4);
      } else {
        ShowToast('Password reset failed', 'danger');
      }
    } catch {
      ShowToast('Error resetting password', 'danger');
    } finally {
      isLoading.value = false;
    }
  };

  /* ---------------------------------- */
  /* UI */
  /* ---------------------------------- */

  return (
    <AuthLayout>
      {step === 2 ? (
        <AppOtp
          onOtpCallback={onOtpCallback}
          onCancel={() => setStep(1)}
        />
      ) : (
        <div className='card bg-base-100 shadow-xl w-full'>
          <div className='card-body p-8'>
            <h2 className='card-title justify-center text-3xl font-bold mb-8 text-primary-custom text-center w-full'>
              {step === 1 && 'Forgot Password'}
              {step === 3 && 'Reset Password'}
              {step === 4 && 'Success'}
            </h2>

            {/* STEP 1 */}
            {step === 1 && (
              <form className='flex flex-col gap-4'>
                <TypeInput
                  type='text'
                  label='Email'
                  control={control}
                  name='userid'
                  rules={ForgotPasswordValidate.userid}
                  error={errors.userid}
                />

                <div className='flex justify-between mt-6'>
                  <TypeButton label='Back to Login' className='text-primary-custom hover:shadow-none hover:outline-none px-0' action='default'
                    variant='ghost' onPress={onCancel} />
                  <TypeButton
                    label='Send OTP'
                    action='secondary'
                    className='px-10 btn-pink rounded-lg'
                    onPress={handleSubmit(onSubmitEmail)}
                  />
                </div>
              </form>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <form onSubmit={handleSubmit(onSubmitPassword)} className='flex flex-col gap-4'>
                <TypeInput
                  type='password'
                  label='Password'
                  control={control}
                  name='password'
                  rules={ForgotPasswordValidate.password}
                  error={errors.password}
                />

                <div className='flex justify-between mt-6'>
                  <TypeButton label='Cancel' action='danger' className='px-6 rounded-lg' onPress={onCancel} />
                  <TypeButton
                    label='Reset Password'
                    action='secondary'
                    className='px-10 btn-pink rounded-lg'
                    htmlType='submit' // ✅ THIS MAKES IT WORK
                    disabled={isLoading.value}
                  />
                </div>
              </form>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div className='text-center'>
                <p className='text-green-600 font-semibold'>Password reset successful</p>
                <TypeButton label='Go to Sign In' action='secondary' onPress={onCancel} />
              </div>
            )}
          </div>
        </div>
      )}
    </AuthLayout>
  );
}
