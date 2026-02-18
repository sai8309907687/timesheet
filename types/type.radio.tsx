import React from 'react';
import { Controller, Control } from 'react-hook-form';
import TypeIcon from '@/types/type.icon';

type RadioProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label: string;
  options: { label: string; value: string }[];
  rules?: Record<string, unknown>;
  value?: string;
  error?: { message?: string };
};

const TypeRadio: React.FC<RadioProps> = ({
  control,
  name,
  label,
  options,
  rules,
  value,
  error,
}: RadioProps) => {
  return (
    <div className='w-full'>
      {label && (
        <label className='text-gray-700 font-medium'>
          {label}
          {!!rules?.required && <span className='text-red-500 ml-1'>*</span>}
        </label>
      )}

      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={value}
        render={({ field: { onChange, value } }) => (
          <div className='flex flex-col space-y-2 mt-2'>
            {options.map((option) => (
              <label key={option.value} className='flex items-center space-x-2 cursor-pointer'>
                <input
                  type='radio'
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                  className='w-4 h-4 text-primary border-gray-300 focus:ring-primary'
                />
                <span className='text-sm'>{option.label}</span>
              </label>
            ))}
          </div>
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

export default TypeRadio;
