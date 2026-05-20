import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Token missing",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_PASSWORD!) as JwtPayload;
    req.userId = decoded.id;
    next();
  } catch (e) {
    return res.status(403).json({ message: "Token is invalid" });
  }
}
