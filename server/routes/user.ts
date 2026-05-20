import express from "express";
import {
  userSignupSchema,
  userSigninSchema,
} from "../validators/userSchema.js";
import { prisma } from "../lib/prisma.js";
import createToken from "../utils/createToken.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const parsedSchema = userSignupSchema.safeParse(req.body);

  if (!parsedSchema.success) {
    return res.status(400).json({ message: parsedSchema.error.message });
  }

  const { firstName, lastName, email, password } = parsedSchema.data;

  // Do a check if user already exists in the database
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Account exists with the given email" });
    }

    // If not, then create a new entry for this user in the database
    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (e) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

router.post("/signin", async (req, res) => {
  const userSchema = userSigninSchema.safeParse(req.body);

  if (!userSchema.success) {
    return res.status(400).json({ message: "Invalid input" });
  }

  const { email, password } = userSchema.data;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
        password,
      },
    });

    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "User does not exist, try signing up" });
    }

    const token = createToken(email);

    return res.status(200).json({
      message: "Successfully signed in",
      token,
    });
  } catch (e) {
    return res.status(500).json({ message: "Some internal error occurred" });
  }
});

export { router };
