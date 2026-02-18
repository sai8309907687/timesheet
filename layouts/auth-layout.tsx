import React from 'react';

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='w-full p-1 overflow-y-auto h-[calc(100vh-88px)] flex items-center justify-end m-auto right bg-white dark:bg-black bg-auth-light dark:bg-auth-dark'>
      <div className='w-[400px] mx-12'>{children}</div>
    </main>
  );
};
