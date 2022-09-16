import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
// configurar o dotenv para acessar as váriáveis de ambiente
// const result = dotenv.config({ path: `${__dirname}/../.env` }); // TODO: configurar path .env
// if (result.error) {
// 	throw result.error;
// }

const checkUserAuth = async function (req, res, next) {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(403).json({ message: "Desculpe, mas você não está autorizado a acessar esta página." });
	}

	try {
		const t = req.headers.authorization;
		const decoded = jwt.verify(t, process.env.TOKEN_SECRET);
		next();
	} catch (err) {
		return res.status(401).json({ err, message: "Login não autorizado" });
	}
};

export default checkUserAuth;
