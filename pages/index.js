import React from 'react';
import { fetchUser } from '../apis/userApi';
import UserProfile from '../components/UserProfile';

const Home = ({ user }) => {
  return <UserProfile user={user} />;
};

export async function getServerSideProps(context) {
  const user = await fetchUser('user_id');
  return {
    props: { user: user.data },
  };
}

export default Home;
