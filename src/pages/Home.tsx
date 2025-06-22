import React from 'react';
import { Button } from '../widgets/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const Home: React.FC = () => {
  return (
    <div>
      <h1>หน้าแรก</h1>
      <FontAwesomeIcon icon={faHome} size="2x" />
      <Button onClick={() => alert('คลิกปุ่ม!')}>
        คลิกที่นี่
      </Button>
    </div>
  );
}; 