import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";
import AWSVerifyEmail from "../../emails/VerificationEmail";

export async function sendVerificationEmails(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Spectre Chat Verification code",
      react: AWSVerifyEmail({ verifyCode, username }),
    });
    return { success: true, message: "Verification email send successfully" };
  } catch (emailError) {
    console.log("Error sendig verification email", emailError);
    return { success: false, message: "failed to send verification email" };
  }
}
