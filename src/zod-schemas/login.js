import { z } from "zod";

export const createLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
  // role: z.enum(["landlord", "tenant"], { required_error: "Role is required" }),
});
