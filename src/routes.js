const express = require("express");

const routes = express.Router();

const authMiddleware = require("./app/middlewares/auth");

const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");

routes.get("/index", UserController.index);
routes.get("/show/:id", UserController.show);
routes.delete("/delete/:id", UserController.destroy);
routes.put("/update/:id", UserController.update);
routes.post("/users", UserController.store);

routes.post("/sessions", SessionController.store);

routes.get("/test", authMiddleware, (req, res) => res.json({ ok: true }));

module.exports = routes;
