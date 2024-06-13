import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(4, "Username must be atleast 4 characters")
  .max(20, "Username must be no more 20 characters")
  .regex(
    /^[a-z0-9]+$/,
    "Username must not contain special character and capital letter"
  );

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});
