import { Controller, Control } from "react-hook-form";

type TypeDateProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label: string;
  rules?: Record<string, unknown>;
  error?: { message?: string };
  className?: string;
  disabled?: boolean;
  isDateTimeEnabled?: boolean;
  onChange?: (value: Date | null) => void;
};

const TypeDatePicker = ({
  control,
  name,
  label,
  rules = {},
  error,
  className = "w-full",
  disabled = false,
  isDateTimeEnabled = false,
  onChange,
}: TypeDateProps) => {
  return (
    <section className={className}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <label className="floating-label w-full">
            <input
              type={isDateTimeEnabled ? "datetime-local" : "date"}
              className={`input input-bordered w-full ${error ? "input-error" : ""
                }`}
              placeholder={label}
              disabled={disabled}
              value={
                field.value
                  ? isDateTimeEnabled
                    ? new Date(field.value).toISOString().slice(0, 16)
                    : new Date(field.value).toISOString().slice(0, 10)
                  : ""
              }
              onChange={(e) => {
                const value = e.target.value
                  ? new Date(e.target.value)
                  : null;

                field.onChange(value);
                onChange?.(value);
              }}
            />
            <span>
              {label}
              {!!rules?.required && (
                <span className="text-red-500 ml-1">*</span>
              )}
            </span>
          </label>
        )}
      />

      {error && (
        <p className="text-red-500 text-xs mt-1">
          {error.message}
        </p>
      )}
    </section>
  );
};

export default TypeDatePicker;
