/* Função para verificar se um email já existe no bd */
import connection from "../bd";

export default async function emailAlreadyExists(email) {
	if (!email) {
		// trocar por uma exception
		return new Error({
			message: "E-mail inválido."
		});
	} else {
		connection.query("SELECT * FROM usuario WHERE email = ?",
			email,
			(err, found_email) => {
				if (err) {
					return err;
				} else {
					console.log(found_email);
				}
			}
		);
	}
}
