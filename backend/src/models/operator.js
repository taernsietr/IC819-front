import Sequelize from "sequelize";
import db from "../db.js";
import { validations } from "../resources/index.js";

// TODO: sequelize
export const OperatorModel = {};

export const Operator = {
	crateOperator: async (operatorData) => {
		const createdUser = await OperatorModel.create({
			operatorType: operatorData.operatorType,
		});

		return createdUser;
	},

	isOperatorTypeValid: (operatorType) => {
		// TODO: padronizar os valores dos tipos de operador
		if (operatorType === "ADM'" || operatorType === "KITCHEN") {
			return true;
		}

		return false;
	},
};
