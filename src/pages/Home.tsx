import React from 'react';
import { Button } from '../widgets/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Box from '@widgets/Box';

export const Home: React.FC = () => {
  return (
    <Box justifyContent="center" alignItems="center" height="100vh" bgcolor="black">
      <Box flexDirection="row" justifyContent="center" alignItems="center" gap={2} bgcolor="white">
        <FontAwesomeIcon icon={faHome} />
        <Button>
          <FontAwesomeIcon icon={faHome} />
        </Button>
      </Box>
    </Box>
  );
}; 