import React from 'react';
import { Layout } from './index';
import { Button } from '../../widgets/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Box from '@widgets/Box';

export const LayoutExample: React.FC = () => {
  return (
    <Layout bgcolor="black" flexDirection="row" gap={2}>
      <Box>
        <FontAwesomeIcon icon={faHome} style={{ color: 'white' }} />
        <Button>
          <FontAwesomeIcon icon={faHome} />
        </Button>
      </Box>
    </Layout>
  );
}; 