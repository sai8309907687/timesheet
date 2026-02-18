'use client';

import React from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full';
  className?: string;
  showModalBackdrop?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  title,
  children,
  size = 'md',
  className = '',
  showModalBackdrop = true,
}) => {
  if (!show) return null;

  const sizeClassMap: Record<string, string> = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    full: 'max-w-full',
  };

  const sizeClass = sizeClassMap[size] || sizeClassMap.md;

  return (
    <div className='modal modal-open'>
      <div className={`modal-box ${sizeClass} ${className}`}>
        {title && (
          <h3 className='font-bold text-lg mb-4'>{title}</h3>
        )}
        {children}
      </div>
      <div className={showModalBackdrop ? 'modal-backdrop' : ''} onClick={onClose}></div>
    </div>
  );
};

export default Modal;
