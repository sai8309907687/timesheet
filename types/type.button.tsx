import React from 'react';
import TypeIcon, { IconName } from './type.icon';

interface ButtonProps {
  label: string;
  name?: IconName;
  onPress?: () => void;
  htmlType?: 'button' | 'submit' | 'reset';
  variant?: 'solid' | 'faded' | 'bordered' | 'light' | 'flat' | 'ghost' | 'shadow' | 'outline';
  action?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'default'
    | 'warning'
    | 'info'
    | 'accent';
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  style?: React.CSSProperties;
}

const TypeButton: React.FC<ButtonProps> = ({
  name,
  label,
  onPress,
  htmlType = 'button',
  variant = 'solid',
  action = 'primary',
  className = '',
  disabled = false,
  isLoading = false,
  style,
}: ButtonProps) => {
  // Map action to DaisyUI colors
  const colorClass =
    action === 'primary'
      ? 'btn-primary'
      : action === 'secondary'
        ? 'btn-secondary'
        : action === 'success'
          ? 'btn-success'
          : action === 'danger'
            ? 'btn-error'
            : action === 'warning'
              ? 'btn-warning'
              : action === 'info'
                ? 'btn-info'
                : action === 'accent'
                  ? 'btn-accent'
                  : 'btn-neutral';

  // Map variant to DaisyUI styles
  const variantClass =
    variant === 'bordered' || variant === 'outline'
      ? 'btn-outline'
      : variant === 'ghost'
        ? 'btn-ghost'
        : variant === 'light'
          ? 'btn-ghost' // Approximating light/flat to ghost or soft
          : variant === 'flat'
            ? 'btn-ghost bg-opacity-20'
            : '';

  return (
    <button
      type={htmlType}
      onClick={onPress}
      disabled={disabled || isLoading}
      style={style}
      className={`btn ${colorClass} ${variantClass} ${className}`}
    >

      {!isLoading && name && <TypeIcon name={name} size={18} />}
      <span>{label}</span>
      {isLoading && <span className='loading loading-dots loading-sm'></span>}
    </button>
  );
};

export default TypeButton;
