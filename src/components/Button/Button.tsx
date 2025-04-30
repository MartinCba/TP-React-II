import { twMerge } from 'tailwind-merge';
import { ButtonProps, ButtonVariant } from '../../types/Button';

const variantClasses: Record<ButtonVariant, string> = {
  default: 'bg-blue-500 text-white hover:bg-blue-600',
  disabled: 'bg-gray-300 text-gray-700 cursor-not-allowed',
  danger: 'bg-red-500 text-white hover:bg-red-600',
  outline: 'bg-transparent text-black border border-black hover:bg-gray-300',
  dark: 'bg-black text-white hover:bg-gray-800',
  light: 'bg-white text-black hover:bg-gray-300',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  className = '',
  disabled,
}) => {
  const isDisabled = variant === 'disabled' || disabled;
  const classes = twMerge(
    variantClasses[variant],
    'px-4 py-2 rounded-md transition duration-200 ease-in-out cursor-pointer',
    className
  );

  return (
    <button onClick={onClick} disabled={isDisabled} className={classes}>
      {children}
    </button>
  );
}; 