import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const buttonClass = `${styles.btn} ${styles[variant]} ${className}`;
  return (
    <button className={buttonClass} {...props}>
      <span className={styles.content}>{children}</span>
    </button>
  );
};
