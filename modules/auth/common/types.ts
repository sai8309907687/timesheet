export type GoogleUserResponseType = {
  email: string;
  name: string;
  pic: string;
  isEmailVerified?: boolean;
  provider: string;
  type: string;
  token: string;
};

export type UserSignIn = {
  userid: string;
  password: string;
  type: "user";
  provider: "signin";
};

export type SignUpType = {
  email: string;
  name: string;
  pic: string;
  isEmailVerified?: boolean;
  provider?: string;
  type?: string;
  userid: string;
  password: string;
  reEnterPassword: string;
};
export type OtpType = {
  otp: string;
  email: string;
};

// src/types/types.ts

// Forgot Password steps
export type ForgotPasswordStep = 1 | 2 | 3 | 4;
// 1 → Email, 2 → OTP, 3 → Reset Password, 4 → Success

// Forgot Password user details
export type ForgotPasswordType = {
  userid: string;
  password: string;
};

// API response when requesting OTP
export type ForgotPasswordResponse = {
  success: boolean;
  message?: string;
  error?: string;
  data?: {
    otpId?: string;
    profileId?: string;
  };
};

// API response for OTP verification
export type VerifyOtpResponse = {
  success: boolean;
  message?: string;
  error?: string;
  data?: {
    token?: string;
  };
};

// API response for password reset
export type ResetPasswordResponse = {
  success: boolean;
  message?: string;
  error?: string;
};
