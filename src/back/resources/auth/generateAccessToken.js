const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// configurar o dotenv para acessar as váriáveis de ambiente
const result = dotenv.config({ path: __dirname + "/../.env" });
if (result.error) {
	throw result.error;
}

const tokenSecret = process.env.TOKEN_SECRET;

export default function generateAccessToken(userSecret) {
	return jwt.sign(userSecret, tokenSecret, { expiresIn: "1800s" });
}