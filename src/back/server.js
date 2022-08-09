const express = require("express");
const server = express();

// configurar o dotenv para acessar as váriáveis de ambiente
const dotenv = require("dotenv");
const result = dotenv.config({ path: __dirname + "/../../.env" });
if (result.error) {
	throw result.error;
}

const port = process.env.SERVER_PORT;

const routes = require("./routes");
server.use(routes);

server.listen(port, () => {
	console.log(`Rodando em: http://localhost:${port}`);
});