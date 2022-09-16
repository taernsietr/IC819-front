import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const tokenSecret = process.env.TOKEN_SECRET;

export default function generateAccessToken(userSecret) {
	return jwt.sign(userSecret, tokenSecret, { expiresIn: "1800s" });
}
