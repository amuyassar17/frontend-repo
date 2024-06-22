import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from '../store/actions';
import Button from '@mui/material/Button';

interface User {
    name: string;
  }

const UserProfile = ({ user }: { user: User }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default UserProfile;
