import Sequelize from "sequelize";
import db from "../db.js";
import { validations } from "../resources/index.js";

// TODO: sequelize
export const DeliveryCompanyModel = {};

export const DeliveryCompany = {
	createDeliveryCompany: async (data) => {
		const createdDeliveryCompany = await DeliveryCompanyModel.create({
			name: data.name,
			fee: data.fee,
		});

		return createdDeliveryCompany;
	},

	validateFee: (fee) => {
		// TODO: ver regras de negócio para a taxa de entrega
		console.log("validar taxa de entrega");
		return true;
	},
};
