import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: '',
  userName: '',
  login: () => {},
  logout: () => {}
});