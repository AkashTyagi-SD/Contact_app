import { login, logout } from "../axios-config/auth/auth-service";

export const useAuth = () => {
  return {
    login,
    logout,
    isAuthenticated: !!localStorage.getItem("accessToken"),
  };
};
