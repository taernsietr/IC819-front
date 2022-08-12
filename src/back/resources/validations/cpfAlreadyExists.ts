/* Função para verificar se um cpf já existe no bd */

// import connection from "../bd";

// export default async function cpfAlreadyExists(cpf) {
// 	if (!cpf || (cpf.length) != 11) {
// 		return new Error({
// 			message: "CPF inválido."
// 		});
// 	} else {
// 		connection.query("SELECT * FROM usuario WHERE cpf = (?)",
// 			cpf,
// 			(err, found_cpf) => {
// 				if (err) {
// 					return err;
// 				} else {
// 					console.log(found_cpf);
// 				}
// 			}
// 		);
// 	}
// }

import C from "../../models/client";
const { Client, ClientModel } = C;

export default async function cpfAlreadyExists(cpf:string) {
	
}
