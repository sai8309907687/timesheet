'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Controller } from 'react-hook-form';

export type SimpleSelectOption = {
  key: string;
  label: string;
  disabled?: boolean;
};

type TypeSelectProps = {
  label?: string;
  value?: string;
  options: SimpleSelectOption[];
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  // React Hook Form props
  control?: any;
  name?: string;
  rules?: any;
  error?: any;
};

export const TypeSelect: React.FC<TypeSelectProps> = ({
  label,
  value,
  options = [],
  onChange,
  className = 'w-full',
  disabled = false,
  placeholder = 'Select an option',
  required = false,
  control,
  name,
  rules,
  error,
}) => {
  // If control and name are provided, use react-hook-form Controller
  if (control && name) {
    return (
      <div className={`form-control ${className}`}>
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={value || ''}
          render={({ field }: any) => (
            <label className='floating-label'>
              <select
                {...field}
                disabled={disabled}
                className='select select-bordered w-full text-base-content bg-base-100'
                onChange={(e) => {
                  field.onChange(e.target.value);
                  if (onChange) onChange(e.target.value);
                }}
              >
                <option value='' disabled>
                  {placeholder}
                </option>
                {options.map((option) => (
                  <option key={option.key} value={option.key} disabled={option.disabled}>
                    {option.label}
                  </option>
                ))}
              </select>
              {label && (
                <span className='pointer-events-none'>
                  {label}
                  {required && <span className='text-error ml-1'>*</span>}
                </span>
              )}
            </label>
          )}
        />
        {error && (
          <label className='label'>
            <span className='label-text-alt text-error'>{error.message}</span>
          </label>
        )}
      </div>
    );
  }

  // Simple select without react-hook-form
  return (
    <div className={`form-control ${className}`}>
      <label className='floating-label'>
        <select
          value={value || ''}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          className='select select-bordered w-full text-base-content bg-base-100'
        >
          <option value='' disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.key} value={option.key} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        {label && (
          <span className='pointer-events-none'>
            {label}
            {required && <span className='text-error ml-1'>*</span>}
          </span>
        )}
      </label>
    </div>
  );
};
