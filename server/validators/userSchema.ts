import { z } from "zod";

// user = {
//      firstName: "Roydon",
//      lastName: "Soares",
//      email: "roy@gmail.com",
//      password: "123456"
// }

const userSignupSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});


const userSigninSchema = z.object({
    email: z.email(),
    password: z.string()
})

export { userSignupSchema, userSigninSchema }