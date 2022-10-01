import { ReactNode } from "react";

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: ReactNode;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};
