/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';

type TypeProps = {
  control: any;
  name: string;
  label?: string | undefined | null;
  value?: string | number | undefined;
  rules?: any;
  error?: any;
  className?: string;
  type?: 'text' | 'password' | 'number' | 'datetime-local' | 'textarea' | 'time';
  disabled?: boolean;
  onChange?: (value: any) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
};

export const TypeInput = ({
  control,
  name,
  label,
  value = '',
  rules = {},
  error,
  className = 'w-full',
  type = 'text',
  disabled = false,
  onChange,
  onKeyDown,
  required = false,
}: TypeProps) => {
  const [inputValue, setInputValue] = useState<string | number | undefined>('');

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div className={`form-control ${className}`}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={inputValue}
        render={({ field }: any) =>
          type === 'textarea' ? (
            <label className='floating-label'>
              <textarea
                {...field}
                placeholder={label || ' '}
                disabled={disabled}
                className='textarea textarea-md textarea-bordered w-full'
                onKeyDown={onKeyDown}
                onChange={(e) => {
                  field.onChange(e.target.value);
                  if (onChange) onChange(e.target.value);
                }}
              />
              {label && (
                <span>
                  {label}
                  {required && <span className='text-error ml-1'>*</span>}
                </span>
              )}
            </label>
          ) : (
            <label className='floating-label'>
              <input
                {...field}
                type={type}
                placeholder={label || ' '}
                disabled={disabled}
                className='input input-md input-bordered w-full'
                onKeyDown={onKeyDown}
                onChange={(e) => {
                  field.onChange(type === 'number' ? Number(e.target.value) : e.target.value);
                  if (onChange) onChange(e.target.value);
                }}
              />
              {label && (
                <span>
                  {label}
                  {required && <span className='text-error ml-1'>*</span>}
                </span>
              )}
            </label>
          )
        }
      />
      {error && (
        <label className='label'>
          <span className='label-text-alt text-error'>{error.message}</span>
        </label>
      )}
    </div>
  );
};
