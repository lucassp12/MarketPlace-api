const express = require("express");
const validate = require("express-validation");
const handle = require("express-async-handler");

const routes = express.Router();

const authMiddleware = require("./app/middlewares/auth");

const controllers = require("./app/controllers");
const validators = require("./app/validators");

//User
routes.get("/index", handle(controllers.UserController.index));
routes.get("/show/:id", handle(controllers.UserController.show));
routes.delete("/delete/:id", handle(controllers.UserController.destroy));
routes.put(
  "/update/:id",
  validate(validators.User),
  handle(controllers.UserController.update)
);
routes.post(
  "/users",
  validate(validators.User),
  handle(controllers.UserController.store)
);

//Session
routes.post(
  "/sessions",
  validate(validators.Session),
  handle(controllers.SessionController.store)
);

routes.use(authMiddleware);

//Ads
routes.get("/ads", handle(controllers.AdController.index));
routes.get("/ads/:id", handle(controllers.AdController.show));
routes.post(
  "/ads",
  validate(validators.Ad),
  handle(controllers.AdController.store)
);
routes.put(
  "/ads/:id",
  validate(validators.Ad),
  handle(controllers.AdController.update)
);
routes.delete("/ads/:id", handle(controllers.AdController.destroy));

//Purchases

routes.post(
  "/purchases",
  validate(validators.Purchase),
  handle(controllers.PurchaseController.store)
);
routes.get("/purchases", handle(controllers.PurchaseController.index));

//Aceppt

routes.put("/aceppt/:id", handle(controllers.AcepptController.update));

module.exports = routes;
