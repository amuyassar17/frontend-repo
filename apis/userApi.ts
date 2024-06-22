import axios from 'axios';

export const updateUser = async (userId: string, userData: any) => { // Explicitly using 'any'
  return axios.put('/api/update-user-data', { userId, userData });
};

export const fetchUser = async (userId: string) => {
  return axios.get(`/api/fetch-user-data?userId=${userId}`);
};
