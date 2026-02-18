'use client';

import { ConstKeys, JwtDecode } from 'dff-util';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { isSinginLoading, onSingin } from './common/services';
import { LoginValidate } from './common/validate';

import { AuthLayout } from '@/layouts/auth-layout';
// import { TenantModal } from './tenant-modal';
// import { AuthState } from '@/modules/signin/common/service';
// import { fetchMenuAccess } from '@/modules/menu/common/service';
import TypeButton from '@/types/type.button';
import { TypeInput } from '@/types/type.input';
import { CheckSession, RouterChange, ShowToast } from '@/utils/app.event';
import { hasTenant as checkHasTenant } from '@/utils/app.http';
import { AppRouter } from '@/utils/app.router';
import AppStorage, { SESSION_INFO, TOKEN } from '@/utils/app.storage';
import { checkLoginUser } from '@/utils/app.util';

export function LoginPage() {
  const { t } = useTranslation();
  const initialTenant = checkHasTenant();
  // const [showTenantModal, setShowTenantModal] = useState(!initialTenant);
  const [hasTenant, setHasTenant] = useState(initialTenant);

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
  } = useForm({
    defaultValues: {
      email: 'hr@dff-software.com',
      password: '',
    },
  });

  const onSubmit = async (data: Record<string, string>) => {
    const requestData = {
      userid: data.email,
      password: btoa(data.password),
      provider: 'email',
    };

    const resp = await onSingin(requestData);

    if (resp) {
      AppStorage.setData(TOKEN, resp?.token);
      const decoded = JwtDecode(resp?.token);
      AppStorage.setData(SESSION_INFO, decoded);
      CheckSession();
      RouterChange(AppRouter.DASHBOARD);

      // Fetch menu access after login using role from signin response
      try {
        console.log('Login: Attempting to fetch menu access');
        console.log('Login: Signin response:', resp);
        console.log('Login: Decoded token:', decoded);

        // Try to get menuRoleId from response data, decoded token, or construct from roles
        const userData = resp?.data || resp;
        const decodedWithRoles = decoded as Record<string, unknown>; // JwtDecode returns JwtPayload but token may have custom fields

        console.log('Login: User data:', userData);
        console.log('Login: Decoded with roles:', decodedWithRoles);

        // Try multiple ways to get menuRoleId
        const menuRoleId =
          userData?.menuRoleId ||
          decodedWithRoles?.menuRoleId ||
          userData?.roleId ||
          decodedWithRoles?.roleId;

        console.log('Login: Extracted menuRoleId:', menuRoleId);

        if (menuRoleId) {
          console.log('Login: Calling fetchMenuAccess with menuRoleId:', menuRoleId);
          // await fetchMenuAccess(menuRoleId);
          console.log('Login: fetchMenuAccess completed');
        } else {
          console.warn('Login: No menuRoleId found, trying fallback');
          console.warn('Login: Available fields in userData:', Object.keys(userData || {}));
          console.warn('Login: Available fields in decoded:', Object.keys(decodedWithRoles || {}));

          // Fallback: Try using "ADMIN_ADMIN" as default for admin users
        }
      } catch (error) {
        // Log error but don't block login
        console.error('Login: Failed to fetch menu access:', error);
      }

      RouterChange(AppRouter.DASHBOARD);
    } else {
      ShowToast(ConstKeys.ACCESS_DENIED, 'danger');
    }
  };

  return (
    <AuthLayout>
      <div className='flex flex-col items-center justify-center p-4'>
        <div className='card bg-base-100 shadow-xl w-full'>
          <div className='card-body p-8'>
            <h2 className='card-title justify-center text-3xl font-bold mb-8 text-primary-custom text-center w-full'>
              {t("signIn")}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(onSubmit)();
              }}
            >
              <div className='flex flex-col gap-4'>
                <TypeInput
                  control={control}
                  error={errors.email}
                  label={t("email")}
                  name='email'
                  rules={LoginValidate.email}
                  type='text'
                  className='w-full'
                />

                <TypeInput
                  control={control}
                  error={errors.password}
                  label={t("password")}
                  name='password'
                  rules={LoginValidate.password}
                  type='password'
                  className='w-full'
                />

                {/* Action Buttons */}
                <div className='flex items-center justify-between mt-6'>
                  <TypeButton
                    action='default'
                    label={t("forgotPassword")}
                    variant='ghost'
                    className='text-primary-custom hover:bg-inherit hover:shadow-none hover:border-none hover:outline-none px-0'
                    onPress={() => RouterChange(AppRouter.FORGOT_PASSWORD)}
                  />
                  <TypeButton
                    action='secondary'
                    disabled={isSinginLoading.value}
                    isLoading={isSinginLoading.value}
                    label={isSinginLoading.value ? t("loading") : t("login")}
                    variant='solid'
                    className='px-10 btn-pink rounded-lg'
                    htmlType='submit'
                  />
                </div>

                <div className='text-center mt-4'>
                  <span className='text-sm text-base-content/70'>{t("noAccount")} </span>
                  <span
                    className='text-sm text-primary cursor-pointer hover:underline font-semibold'
                    onClick={() => RouterChange(AppRouter.SIGN_UP)}
                  >
                    {t("signUp")}
                  </span>
                </div>

                {/* {!hasTenant && (
                  <div className='text-center mt-2'>
                    <sub
                      className='text-primary cursor-pointer hover:underline font-semibold'
                      onClick={() => setShowTenantModal(true)}
                    >
                      {t("changeTenant")}
                    </sub>
                  </div>
                )} */}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Tenant Modal */}
      {/* <TenantModal
        show={showTenantModal}
        onClose={() => setShowTenantModal(false)}
        onSuccess={() => setHasTenant(true)}
      /> */}
    </AuthLayout>
  );
}
