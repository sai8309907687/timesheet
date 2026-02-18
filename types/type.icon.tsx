'use client';
import { CircleOff, icons } from 'lucide-react';
import React from 'react';

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  color?: string;
  size?: number;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

const TypeIcon: React.FC<IconProps> = ({ name, color, size = 24, onClick, className }) => {
  const LucideIcon = icons[name];

  const defaultClassName = 'cursor-pointer transition-colors duration-200';
  const combinedClassName = `${defaultClassName} ${className || ''}`;

  if (!LucideIcon) {
    return <CircleOff color={color || 'lightslategray'} size={size} className={combinedClassName} />;
  }

  return (
    <LucideIcon
      className={combinedClassName}
      color={color}
      size={size}
      onClick={onClick}
    />
  );
};

export default TypeIcon;
