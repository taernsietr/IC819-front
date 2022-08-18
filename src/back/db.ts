// referência: https://github.com/mariadb-developers/todo-app-nodejs-sequelize/blob/main/src/api/db.js
import "../../dotenv/config";

const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, { host: process.env.DB_HOST, port: process.env.DB_PORT, dialect: "mariadb", });

async function authenticateSequelize() {
	await sequelize
		.authenticate()
		.then(() => {
			console.log("Connection authenticated successfully");
		})
		.catch((error: any) => { throw error; });
}

authenticateSequelize();

export default sequelize;
