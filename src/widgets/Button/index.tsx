import React from 'react';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'contained',
  color = 'primary',
}) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
}; 