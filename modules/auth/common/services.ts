import { signal } from "@preact/signals-react";
import { ConstMessages } from "dff-util";

import { ForgotPasswordResponse, ForgotPasswordType, ResetPasswordResponse, SignUpType, VerifyOtpResponse } from "./types";

import { ShowToast } from "@/utils/app.event";
import AppHttp, { MsUrl } from "@/utils/app.http";

export const ForgotPasswordOtpType = signal<ForgotPasswordType>(
  {} as ForgotPasswordType,
);

export const EnabledButtons = signal<boolean>(false);
export const LoggedInUserId = signal<string | null>(null);
export const userIdSignal = signal<string>("");

export const ForgotSerice = async () => {
  // const res = await AppHttp.Post(
  //   AppHttp.AUTH_MS_HOST + "/auth/signUp",
  //   SignUpSignal.value
  // );
  // return res;
};

export const SignUpSignal = signal<SignUpType>({} as SignUpType);
export const signUpSerice = async () => {
  // const res = await AppHttp.Post(
  //   AppHttp.AUTH_MS_HOST + "/auth/signUp",
  //   SignUpSignal.value
  // );
  // return res;
};

export const verifySignUp = async (otp: number, id: string) => {
  try {
    // Use the parameters in the API call
    const response = await fetch("/api/verify-signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp, id }),
    });

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const isSinginLoading = signal<boolean>(false);
export const onSingin = async (data: Record<string, unknown>) => {
  try {
    isSinginLoading.value = true;
    const url = MsUrl.sor + "/auth/signin";
    const params = { ...data };
    const resp = await AppHttp.Post(url, params);

    if (resp?.error || resp.data === null || resp.data.data === null) {
      throw { error: { message: "Invalid credentials" } };
    }

    return resp.data;
  } catch (error: unknown) {
    const err = error as { message?: string; error?: { message?: string } };
    const messsage = err?.message || err?.error?.message || ConstMessages.WENT_WRONG;
    ShowToast(messsage, "danger");
    throw error;
  } finally {
    isSinginLoading.value = false;
  }
};

export const forgotPasswordService = async (
  userid: string
): Promise<ForgotPasswordResponse> => {
  const url = MsUrl.sor + "/auth/forgot-password";
  const res = await AppHttp.Post(url, { userid });
  return res.data;
};

export const verifyOtpService = async (
  otp: string,
  otpId: string,
  profileId: string
): Promise<VerifyOtpResponse> => {
  const url = MsUrl.sor + "/auth/verify-otp";
  const res = await AppHttp.Post(url, {
    otp,
    oid: otpId,
    uid: profileId,
  });
  return res.data;
};

export const resetPasswordService = async (
  payload: {
    userid: string;
    password: string;
    otpId: string;
  }
): Promise<ResetPasswordResponse> => {
  const url = MsUrl.sor + "/auth/reset-password";
  const res = await AppHttp.Post(url, payload);
  console.log("ResetPasswordResponse", res)
  return res.data;
};
