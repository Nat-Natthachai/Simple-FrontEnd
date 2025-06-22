import React, { useState } from 'react';
import { Box, Skeleton } from '@mui/material';

interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  fallbackSrc?: string;
  onError?: () => void;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width = '100%',
  height = 'auto',
  className,
  style,
  fallbackSrc = '/placeholder.png',
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
    onError?.();
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
      }}
    >
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
        />
      )}
      <img
        src={error ? fallbackSrc : src}
        alt={alt}
        className={className}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: isLoading ? 'none' : 'block',
          ...style,
        }}
        onLoad={handleLoad}
        onError={handleError}
      />
    </Box>
  );
}; 