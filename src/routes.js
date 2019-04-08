const express = require("express");

const routes = express.Router();

const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");

routes.get("/index", UserController.index);
routes.get("/show/:id", UserController.show);
routes.delete("/delete/:id", UserController.destroy);
routes.put("/update/:id", UserController.update);
routes.post("/users", UserController.store);

routes.post("/sessions", SessionController.store);

module.exports = routes;
