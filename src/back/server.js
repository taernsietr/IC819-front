const express = require("express");
const server = express();
const session = require("express-session");
const MariadbStore = require("express-mariadb-session")(session);
const routes = require("./routes");
const bd = require("./db");

// configurar o dotenv para acessar as váriáveis de ambiente
const dotenv = require("dotenv");
const result = dotenv.config({ path: __dirname + "/../../.env" }); // path.resolve("src", ".env");
if (result.error) {
	throw result.error;
}

const port = process.env.SERVER_PORT;

server.use(express.json());

const sessionStore = new MariadbStore({}, bd);

server.use(session({
	key: process.env.SESSION_KEY,
	secret: process.env.SESSION_SECRET,
	store: sessionStore,
	// resave: false,
	// saveUninitialized: false,
	cookie: {
		// 1 dia em milisegundos
		maxAge: 86400000
	}
}));

server.use(routes);

server.listen(port, () => {
	console.log(`Rodando em: http://localhost:${port}`);
});
