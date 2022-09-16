import { responseCodes, validations } from "../resources/index.js";
import { DeliveryCompany, DeliveryCompanyModel } from "../models/deliveryCompany.js";

async function createDeliveryCompany(req, res) {
	try {
		const { name, fee } = req.body;
		console.log(`[createDeliveryCompany] name = ${name}`);
		console.log(`[createDeliveryCompany] fee = ${fee}`);

		// verificar se os dados são válidos
		if (
			!validations.nameValidation(name)
			|| !DeliveryCompany.validateFee(fee)) {
			console.log(`[createDeliveryC] nameVal =${validations.nameValidation(name)}`);
			console.log(`[createDeliveryC] feeVal = ${DeliveryCompany.validateFee(fee)}`);
			res.status(400).send({
				code: responseCodes.invalidData,
			});
			return;
		}

		const newDeliveryCompany = {
			name,
			fee,
		};

		const created = newDeliveryCompany; // enquanto o bd não está funcionando usar essa linha
		// const created = await DeliveryCompany.createDeliveryCompany(newDeliveryCompany);

		res.status(201).send({
			code: responseCodes.created,
			result: created,
		});
	} catch (error) {
		console.log(`ERROR: ${error}`);
		res.status(500).send({
			code: responseCodes.unknownInternalError,
			error,
		});
	}
}

export {
	createDeliveryCompany,
};
