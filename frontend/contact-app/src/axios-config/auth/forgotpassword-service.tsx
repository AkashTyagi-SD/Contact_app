import { AUTH_URL } from "../../common/ApiBaseUrl";
import { CommonApiResponse } from "../../common/CommonModel";
import axiosInstance from "../axios-instance";

export interface ForgotPasswordPayload {
  email: string;
}

export interface ForgotPasswordResponse {
  data: {
    isverify: {
      email: string;
      verified: boolean;
    };
    OTP: string;
  };
}

// API call to verify email and send OTP for forgot password
export const verifyEmail = async (
  payload: ForgotPasswordPayload,
): Promise<CommonApiResponse<ForgotPasswordResponse>> => {
  const response = await axiosInstance.post<
    CommonApiResponse<ForgotPasswordResponse>
  >(AUTH_URL.VERIFY_EMAIL, payload);
  return response.data;
};
