import jwt from "jsonwebtoken"
import "dotenv/config";

export default function createToken(email: String) {
    const token = jwt.sign({email}, process.env.JWT_PASSWORD!)
    return token
}