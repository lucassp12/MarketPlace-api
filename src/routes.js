const express = require("express");

const routes = express.Router();

const authMiddleware = require("./app/middlewares/auth");

const controllers = require("./app/controllers");

//User
routes.get("/index", controllers.UserController.index);
routes.get("/show/:id", controllers.UserController.show);
routes.delete("/delete/:id", controllers.UserController.destroy);
routes.put("/update/:id", controllers.UserController.update);
routes.post("/users", controllers.UserController.store);

//Session
routes.post("/sessions", controllers.SessionController.store);

routes.use(authMiddleware);

//Ads
routes.get("/ads", controllers.AdController.index);
routes.get("/ads/:id", controllers.AdController.show);
routes.post("/ads", controllers.AdController.store);
routes.put("/ads/:id", controllers.AdController.update);
routes.delete("/ads/:id", controllers.AdController.destroy);

module.exports = routes;
