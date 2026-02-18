'use client';

import { useEffect } from 'react';
import { useSignals } from '@preact/signals-react/runtime';
import { ToastMessage } from '@/utils/app.event';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

const ToastComponent = () => {
  useSignals();

  useEffect(() => {
    if (ToastMessage.value.show) {
      const timer = setTimeout(() => {
        ToastMessage.value = { ...ToastMessage.value, show: false };
      }, 3000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ToastMessage.value.show]);

  if (!ToastMessage.value.show) return null;

  const type = ToastMessage.value.type || 'success';
  const alertClass =
    type === 'danger'
      ? 'alert-error'
      : type === 'primary'
        ? 'alert-info'
        : type === 'warning'
          ? 'alert-warning'
          : 'alert-success';

  return (
    <div className='toast toast-top toast-end z-[9999]'>
      <div className={`alert ${alertClass} text-white`}>
        {type === 'success' && <CheckCircle className='w-5 h-5' />}
        {type === 'danger' && <AlertCircle className='w-5 h-5' />}
        {(type === 'primary' || type === 'warning') && <Info className='w-5 h-5' />}
        <span>{ToastMessage.value.message}</span>
      </div>
    </div>
  );
};

export default ToastComponent;
