import axiosInstance from './axiosInstance';

// email: 'admin@example.com',
// password: 'admin123',
interface Props {
  email: string;
  password: string;
}
// this for  login user's with the authentication
export const login = (data: Props) => {
  return axiosInstance.post('/login', data);
};
