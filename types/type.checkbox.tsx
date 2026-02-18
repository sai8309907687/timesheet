/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from "react-hook-form";

type TypeProps = {
  control: any;
  name: string;
  label?: string | undefined | null;
  value?: boolean;
  rules?: any;
  error?: any;
  className?: string;
  type?: "before" | "after";
  variant?: "square" | "circular";
  disabled?: boolean;
};

export const TypeCheckbox = ({
  control,
  name,
  label,
  value = false,
  rules = {},
  className = "form-control w-full",
  type = "after",
  variant = "square",
  disabled = false
}: TypeProps) => {
  return (
    <section className={className}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={value}
        render={({ field }: any) => (
          <label className={`label cursor-pointer justify-start gap-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {type === "before" && <span className="label-text">{label}</span>}
            <input
              {...field}
              type="checkbox"
              checked={field.value}
              disabled={disabled}
              className={`checkbox ${variant === "circular" ? "rounded-full" : "rounded-md"} checkbox-primary`}
            />
            {type === "after" && <span className="label-text">{label}</span>}
          </label>
        )}
      />
    </section>
  );
};
