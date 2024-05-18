import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button = ({
  className,
  type,
  size,
  disabled,
  variant = 'primary',
  onClick,
  fullWidth = true,
  children,
}: Props) => {
  const styleClass = clsx(
    {
      'bg-black': variant === 'primary',
      'text-white': variant === 'primary',
    },
    {
      'bg-white': variant === 'secondary',
      'border border-grey200': variant === 'secondary',
    },
    {
      'bg-grey100': disabled === true,
      'text-grey400': disabled === true,
    },
    {
      'w-full': fullWidth === true,
    },
    'text-base font-bold rounded-full py-3 flex justify-center items-center'
  );
  return (
    <button
      className={`${className} ${styleClass}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
