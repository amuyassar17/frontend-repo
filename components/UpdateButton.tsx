import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { updateUser } from '../apis/userApi';

const UpdateButton = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    updateUser('user_id', { name: 'John Doe' })
      .then(response => {
        alert('Update successful');
        setLoading(false);
      })
      .catch(error => {
        alert('Error updating user');
        setLoading(false);
      });
  };

  return (
    <Button variant="contained" onClick={handleClick} disabled={loading}>
      {loading ? <CircularProgress size={24} /> : 'Update User'}
    </Button>
  );
};

export default UpdateButton;
