import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface SvgDimensionProps extends BoxProps {
  width?: string | number;
  height?: string | number;
  preserveAspectRatio?: string;
  children: React.ReactNode;
}

export const SvgDimension: React.FC<SvgDimensionProps> = ({
  width = '100%',
  height = '100%',
  preserveAspectRatio = 'xMidYMid meet',
  children,
  ...props
}) => {
  return (
    <Box
      {...props}
      sx={{
        width,
        height,
        '& svg': {
          width: '100%',
          height: '100%',
          preserveAspectRatio,
        },
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
}; 