import TypeIcon from '@/types/type.icon';
import { Controller, Control } from 'react-hook-form';
import React, { useState } from 'react';

interface DropdownInputProps {
  label: string;

  value: string | string[];
  onSelect?: (value: string[] | { id: string; nameLang: Record<string, string> }) => void;
  placeholder: string;
  required?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>;
  name?: string;
  className?: string;
  options?: { id: string; nameLang: Record<string, string> }[];
  multiSelect?: boolean;
}

export const DropdownInput = ({
  label,
  value,
  onSelect,
  placeholder,
  className,
  required,
  control,
  name,
  options = [],
  multiSelect = false,
}: DropdownInputProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(Array.isArray(value) ? value : []);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item: { id: string; nameLang: Record<string, string> }) => {
    let newValues;
    if (multiSelect) {
      if (selectedValues.includes(item.id)) {
        newValues = selectedValues.filter((val) => val !== item.id);
      } else {
        newValues = [...selectedValues, item.id];
      }
    } else {
      newValues = [item.id];
      setIsOpen(false); // Close on selection if single select
    }
    setSelectedValues(newValues);
    if (onSelect) onSelect(multiSelect ? newValues : item);
  };

  return (
    <div className='flex flex-col gap-2 w-full'>
      <label className='text-sm font-medium text-gray-700'>
        {label}
        {required && <span className='text-red-500 ml-1'>*</span>}
      </label>
      <Controller
        control={control}
        name={name || ''}
        defaultValue={multiSelect ? selectedValues : selectedValues[0] || ''}
        render={({ field: { onChange } }) => (
          <div className={`dropdown w-full ${isOpen ? 'dropdown-open' : ''}`}>
            <div
              tabIndex={0}
              role='button'
              className={`btn btn-outline w-full justify-between font-normal bg-white ${className}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={selectedValues.length ? 'text-gray-900' : 'text-gray-400'}>
                {multiSelect
                  ? selectedValues
                    .map((val) => options.find((o) => o.id === val)?.nameLang?.['en-US'])
                    .join(', ')
                  : options.find((o) => o.id === selectedValues[0])?.nameLang?.['en-US'] ||
                  placeholder}
              </span>
              <TypeIcon name='ChevronDown' size={20} />
            </div>
            {isOpen && (
              <ul
                tabIndex={0}
                className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full max-h-60 overflow-y-auto block'
              >
                {options.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      handleSelect(item);
                      onChange(multiSelect ? selectedValues : item.id);
                    }}
                  >
                    <a
                      className={`flex items-center gap-2 ${selectedValues.includes(item.id) ? 'active' : ''}`}
                    >
                      {multiSelect && (
                        <input
                          type='checkbox'
                          checked={selectedValues.includes(item.id)}
                          readOnly
                          className='checkbox checkbox-sm'
                        />
                      )}
                      {item?.nameLang?.['en-US'] ?? item.id}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {/* Backdrop to close dropdown when clicking outside - optional, but helpful */}
            {isOpen && <div className='fixed inset-0 z-0' onClick={() => setIsOpen(false)}></div>}
          </div>
        )}
      />
    </div>
  );
};
