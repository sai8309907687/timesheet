import React, { useState, useMemo } from 'react';
import { Controller, Control } from 'react-hook-form';
import TypeIcon from '@/types/type.icon';

type SelectProps = {
  label: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  placeholder: string;
  rules?: Record<string, unknown>;
  defaultValue?: string;
  className?: string;
  error?: { message?: string };
  options: { label: string; value: string }[];
};

const TypeAutoComplete: React.FC<SelectProps> = ({
  control,
  label,
  name,
  placeholder,
  rules,
  defaultValue,
  className = '',
  error,
  options,
}: SelectProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter options based on input value
  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase()),
    );
  }, [inputValue, options]);

  return (
    <div className='w-full'>
      {label && <label className='block text-sm font-medium mb-2'>{label}</label>}
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field: { onChange, ref } }) => (
          <div className='relative'>
            <div className='relative w-full'>
              <input
                type='text'
                placeholder={placeholder}
                className={className}
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 100)}
                ref={ref}
              />
              <button
                type='button'
                className='absolute inset-y-0 right-2 flex items-center'
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <TypeIcon name='ChevronDown' size={20} />
              </button>
            </div>
            {isDropdownOpen && (
              <div className='absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-auto'>
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option) => (
                    <div
                      key={option.value}
                      className='p-2 hover:bg-gray-100 cursor-pointer'
                      onClick={() => {
                        onChange(option.value);
                        setInputValue(option.label);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {option.label}
                    </div>
                  ))
                ) : (
                  <div className='p-2 text-gray-500'>No options found</div>
                )}
              </div>
            )}
            {error && <p className='text-sm text-red-600 mt-1'>{error.message}</p>}
          </div>
        )}
      />
    </div>
  );
};

export default TypeAutoComplete;
