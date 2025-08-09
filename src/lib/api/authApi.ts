import axiosInstance from './axiosInstance';

// this for  login user's with the authentication
export const login = (data) => {
  return axiosInstance.post('/login', data);
};
