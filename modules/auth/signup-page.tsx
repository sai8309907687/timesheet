'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ConstMessages } from 'dff-util';

import { SignUpValidate } from './common/validate';
import { verifySignUp } from './common/services';

import { checkLoginUser } from '@/utils/app.util';
import { RouterChange, ShowToast } from '@/utils/app.event';
import { AppRouter } from '@/utils/app.router';
import { TypeInput } from '@/types/type.input';
import TypeButton from '@/types/type.button';
import { AuthLayout } from '@/layouts/auth-layout';
import OtpInput from '@/components/otp-input';

export default function SignUpPage() {
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [otpValue, setOtpValue] = useState('');

  useEffect(() => {
    const isLogin = checkLoginUser();

    if (isLogin) {
      RouterChange(AppRouter.HOME);
    }
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setIsEmailSubmitted(true); // Set submitted state
  };

  const onCancelOtp = () => {
    setIsEmailSubmitted(false); // ✅ Return to sign-up form
  };

  const handleOtp = async (otp: number) => {
    try {
      // Call the verifySignUp function with the OTP
      const response = await verifySignUp(otp, 'dummy_id');

      const message = response?.error?.message || ConstMessages.WENT_WRONG;

      ShowToast(message, 'warning');
      // Handle the response accordingly
    } catch (error: unknown) {
      const err = error as { error?: { message?: string } };
      const message = err?.error?.message || ConstMessages.WENT_WRONG;

      ShowToast(message, 'warning');
    }
  };

  const onCancel = () => {
    RouterChange(AppRouter.SIGN_IN);
  };

  return (
    <>
      <AuthLayout>
        <div className='card bg-base-100 shadow-xl w-full'>
          <div className='card-body p-8'>
            <h2 className='card-title justify-center text-3xl font-bold mb-8 text-primary-custom text-center w-full'>
              Sign Up
            </h2>
            {!isEmailSubmitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(onSubmit)();
                }}
              >
                <div className='flex flex-col gap-4'>
                  <TypeInput
                    control={control}
                    error={errors.name}
                    label='Full Name'
                    name='name'
                    rules={SignUpValidate.name}
                    className='w-full'
                  />
                  <TypeInput
                    control={control}
                    error={errors.email}
                    label='Email'
                    name='email'
                    rules={SignUpValidate.email}
                    className='w-full'
                  />
                  <TypeInput
                    control={control}
                    error={errors.mobileNumber}
                    label='Mobile Number'
                    name='mobileNumber'
                    rules={SignUpValidate.phone}
                    className='w-full'
                  />
                  <TypeInput
                    control={control}
                    error={errors.password}
                    label='Password'
                    name='password'
                    rules={SignUpValidate.password}
                    type='password'
                    className='w-full'
                  />

                  <div className='flex justify-between gap-4 mt-4'>
                    <TypeButton label='Back to Login' className='text-primary-custom hover:shadow-none hover:outline-none px-0' action='default'
                      variant='ghost' onPress={onCancel} />
                    <TypeButton
                      action='secondary'
                      label='Submit'
                      variant='solid'
                      className='px-10 btn-pink rounded-lg'
                      onPress={handleSubmit(onSubmit)}
                    />
                  </div>
                </div>
              </form>
            ) : (
              <div className='text-center'>
                <p className='text-lg text-base-content/70'>OTP sent successfully</p>

                {/* ✅ OTP Input Field */}
                <div className='flex w-full justify-center mt-6 mb-6'>
                  <OtpInput
                    description='Enter OTP'
                    length={6}
                    value={otpValue}
                    onValueChange={(val) => {
                      setOtpValue(val);
                      if (val.length === 6) {
                        handleOtp(Number(val));
                      }
                    }}
                  />
                </div>

                {/* ✅ OTP Buttons */}
                <div className='flex justify-center mt-4'>
                  <TypeButton
                    action='danger'
                    label='Cancel'
                    onPress={onCancelOtp}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </AuthLayout>
    </>
  );
}
