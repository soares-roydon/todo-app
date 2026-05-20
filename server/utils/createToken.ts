import jwt from "jsonwebtoken"
import "dotenv/config";

export default function createToken(id: number, email: String) {
    const token = jwt.sign({id, email}, process.env.JWT_PASSWORD!)
    return token
}