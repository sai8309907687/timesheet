import { Controller, Control } from "react-hook-form";

type TypeProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any>;
  name?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
  checked?: boolean; // For standalone usage
  size?: "xs" | "sm" | "md" | "lg";
  toggleClassName?: string;
};

const TypeSwitch = ({
  control,
  name,
  label,
  className = "flex items-center gap-3 w-full",
  disabled = false,
  onChange,
  checked,
  size = "md",
  toggleClassName,
}: TypeProps) => {
  const sizeClass = size === "md" ? "" : `toggle-${size}`;

  if (control && name) {
    return (
      <section className={className}>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <label className="label cursor-pointer gap-3">
              {label && <span className="label-text">{label}</span>}

              <input
                type="checkbox"
                className={`toggle ${toggleClassName || "toggle-primary"} ${sizeClass}`}
                checked={!!field.value}
                disabled={disabled}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  field.onChange(isChecked);
                  onChange?.(isChecked);
                }}
              />
            </label>
          )}
        />
      </section>
    );
  }

  // Standalone usage
  return (
    <section className={className}>
      <label className="label cursor-pointer gap-3">
        {label && <span className="label-text">{label}</span>}

        <input
          type="checkbox"
          className={`toggle ${toggleClassName || "toggle-primary"} ${sizeClass}`}
          checked={!!checked}
          disabled={disabled}
          onChange={(e) => {
            const isChecked = e.target.checked;
            onChange?.(isChecked);
          }}
        />
      </label>
    </section>
  );
};

export default TypeSwitch;
