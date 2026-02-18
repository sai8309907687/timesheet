import React from 'react';
import { Controller, Control } from 'react-hook-form';
import TypeIcon from '@/types/type.icon';

type InputProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>; // Standard react-hook-form control type
  name: string;
  label: string;
  placeholder?: string;
  rules?: Record<string, unknown>;
  value?: string;
  className?: string;
  error?: { message?: string };
};

const TypePassword: React.FC<InputProps> = ({
  control,
  name,
  label,
  placeholder,
  rules,
  value,
  error,
  className = 'w-full',
}: InputProps) => {
  return (
    <div className={className}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={value}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <label className='floating-label'>
            <input
              id={name}
              placeholder={label || placeholder || ' '}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              type='password'
              className='input input-md input-bordered w-full'
            />
            <span>{label}</span>
          </label>
        )}
      />

      {error && (
        <div className='flex items-center text-red-500 text-xs mt-1 gap-1'>
          <TypeIcon name='TriangleAlert' size={16} />
          <span>{error.message}</span>
        </div>
      )}
    </div>
  );
};

export default TypePassword;
