import React, { ReactNode } from 'react';
import Box from '@widgets/Box';

interface LayoutProps {
  children: ReactNode;
  bgcolor?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: number;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  bgcolor = "white",
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "column",
  gap = 0
}) => {
  return (
    <Box
      height="100vh"
      width="100vw"
      bgcolor={bgcolor}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      gap={gap}
    >
      {children}
    </Box>
  );
}; 