import { Operator, OperatorModel } from "../models/operator.js";
import { responseCodes } from "../resources/index.js";

async function createOperator(req, res) {
	try {
		const { operatorType } = req.body;
		console.log(`[createOperator] operatorType = ${operatorType}`);

		// validar tipo de operador
		if (!Operator.isOperatorTypeValid(operatorType)) {
			console.log("[createOperator] !Operator.isOperatorTypeValid(operatorType)");

			res.status(400).send({
				code: responseCodes.invalidData,
			});
			return;
		}

		const newUser = { operatorType };

		const createdUser = newUser; // enquanto o bd não está funcionando usar essa linha
		// const createdUser = await Operator.createOperator(newUser);

		res.status(201).send({
			code: responseCodes.created,
			result: createdUser,
		});
		return;
	} catch (error) {
		console.log(`Error: ${error}`);

		res.status(500).send({
			code: responseCodes.unknownInternalError,
			error,
		});
	}
}

export {
	createOperator,
};
