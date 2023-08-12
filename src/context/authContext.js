import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userInfos: null,
  login: () => {},
  logout: () => {},
  indexInfo:{}
});

export default AuthContext;
  