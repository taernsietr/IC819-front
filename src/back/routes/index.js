const Router = require("express").Router;
// import * as userController from "./controllers/userController";
// import checkUserAuth from "./middlewares/checkUserAuth";

const router = Router();

// Acessáveis por qualquer pessoa (não necessita de autenticação)
// router.post("/cadastrar", userController.createUser);
// router.post("/login", userController.login);

// // Restritas aos usuários
// router.patch("/editar-perfil/:userID", checkUserAuth, userController.updateUser);
// router.patch("/atualizar-senha/:userID", checkUserAuth, userController.updatePassword);
// router.get("/listar-usuarios/:name", userController.list);
// router.delete("/delete/:id", checkUserAuth, userController.deleteUser);

module.exports = router;