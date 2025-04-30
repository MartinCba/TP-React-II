export type ButtonVariant =
  | 'default'
  | 'disabled'
  | 'danger'
  | 'outline'
  | 'dark'
  | 'light'
  | 'ghost'

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
} 