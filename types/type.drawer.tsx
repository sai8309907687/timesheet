'use client';

import React, { useEffect, useRef } from 'react';

interface TypeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  width?: string;
  className?: string;
}

export const TypeDrawer: React.FC<TypeDrawerProps> = ({
  isOpen,
  onClose,
  children,
  width = 'w-96',
  className = '',
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={onClose}
        aria-hidden='true'
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full bg-base-100 z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${width} ${className} ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className='flex flex-col h-full'>
          {/* Header */}

          {/* Content */}
          <div className='flex-1 overflow-y-auto bg-white dark:bg-black'>{children}</div>
        </div>
      </div>
    </>
  );
};
