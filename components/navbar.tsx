'use client';

import React from 'react';
import { RouterChange } from '@/utils/app.event';
import { AppRouter } from '@/utils/app.router';
import TypeIcon from '@/types/type.icon';
import { useTranslation } from 'react-i18next';
import { useSignals } from '@preact/signals-react/runtime';
import Image from 'next/image';

import { SessionToken } from '@/utils/app.event';
import { SettingsContent } from '@/modules/settings/SettingsContent';

export const Navbar = ({ onToggle }: { onToggle: () => void }) => {
  const { t } = useTranslation();
  useSignals();
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

  const handleLogout = async () => {
    // await logout(); // Implement logout logic
    RouterChange(AppRouter.SIGN_IN);
  };

  return (
    <>
      <div className='container mx-auto'>
        <div className='navbar bg-white dark:bg-black shadow-sm border-b border-base-200 px-2 lg:px-0'>
          {/* Left Side: Toggle (Mobile only) + Logo */}
          <div className='flex-1 flex items-center gap-2'>
            <div className='flex-none lg:hidden'>
              <button className='btn btn-square btn-ghost' onClick={onToggle}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='inline-block w-5 h-5 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => RouterChange(AppRouter.DASHBOARD)}
            >
              <div className="w-10 h-10 relative">
                <Image
                  alt={t("welcome")}
                  src="/assets/antweb_logo.png"
                  fill
                  className="object-contain"
                />
              </div>

              <span className="text-xl font-bold text-[#8fa4bc] tracking-wide">
                Timesheet
              </span>
            </div>
          </div>

          {/* Right Side: Settings */}
          <div className='flex items-center justify-end gap-3'>
            <div>
              <TypeIcon
                className='text-secondary'
                name='Settings'
                onClick={() => setIsSettingsOpen(true)}
              />
            </div>
            <div>
              {SessionToken.value && (
                <TypeIcon
                  name="LogOut"
                  onClick={handleLogout}
                  className='text-secondary mr-3'
                >
                </TypeIcon>
              )}
            </div>

            {!SessionToken.value && (
              <button
                className='btn btn-pink text-white text-xs font-montserrat-medium rounded-full px-6 py-2 transition h-auto min-h-0 mr-2 border-none'
                onClick={() => RouterChange(AppRouter.SIGN_IN)}
              >
                {t("login")}
              </button>
            )}

          </div>
        </div>
      </div>
      {/* Settings Dialog Placeholder */}
      {isSettingsOpen && (
        <dialog className='modal modal-open'>
          <div className='modal-box'>
            <div className='flex items-center justify-between mb-2'>
              <div>
                <h3 className='font-bold text-primary text-xl'>{t("settings")}</h3>
              </div>
              <div>
                <TypeIcon name="X" className="text-secondary" onClick={() => setIsSettingsOpen(false)} />
              </div>

            </div>

            <SettingsContent />
            {/* <div className='modal-action'>
              <button className="btn" onClick={() => setIsSettingsOpen(false)}>{t("close")}</button>
            </div> */}
          </div>
          <form method='dialog' className='modal-backdrop'>
            <button onClick={() => setIsSettingsOpen(false)}>{t("close")}</button>
          </form>
        </dialog>

      )}
    </>
  );
};
