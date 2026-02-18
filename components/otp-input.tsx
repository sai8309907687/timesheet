import React, { useRef } from 'react';

interface OtpInputProps {
  length?: number;
  value: string;
  onValueChange: (value: string) => void;
  description?: string;
}

const OtpInput: React.FC<OtpInputProps> = ({ length = 6, value = "", onValueChange, description }) => {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    if (!/^\d*$/.test(val)) return; // Only allow numbers

    const newOtp = (value || "").padEnd(length, " ").split('');
    newOtp[index] = val.substring(val.length - 1);
    const combined = newOtp.join('').trim();
    onValueChange(combined);

    // Move to next input if value entered
    if (val && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, length).replace(/\D/g, '');
    if (pastedData) {
      onValueChange(pastedData);
      inputs.current[Math.min(pastedData.length, length - 1)]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {description && <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>}
      <div className="flex gap-2">
        {Array.from({ length }).map((_, i) => (
          <input
            key={i}
            ref={(el) => { inputs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[i] || ''}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            onPaste={handlePaste}
            className="input input-bordered w-12 h-12 text-center text-lg px-0 rounded-lg border-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-primary transition-all font-bold text-black dark:text-white"
          />
        ))}
      </div>
    </div>
  );
};

export default OtpInput;