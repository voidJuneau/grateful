import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  _id: '',
  userid: '',
  login: () => {},
  logout: () => {}
});