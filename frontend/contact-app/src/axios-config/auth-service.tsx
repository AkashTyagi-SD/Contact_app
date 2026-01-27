import { AUTH_URL } from "../common/ApiBaseUrl";
import { CommonApiResponse } from "../common/CommonModel";
import axiosInstance from "./axios-instance";

export interface LoginPaylod {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  userId: string;
  email: string;
}

/**
 * Login API call
 * @param payload
 * @returns
 */
export const login = async (
  payload: LoginPaylod,
): Promise<CommonApiResponse<LoginResponse>> => {
  const response = await axiosInstance.post<CommonApiResponse<LoginResponse>>(
    AUTH_URL.LOGIN,
    payload,
  );
  localStorage.setItem("authToken", response.data.data.token);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("authToken");
};
