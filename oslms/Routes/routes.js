import express, { Router } from "express";
import { validate, Joi } from "express-validation";
import userMasterController from "../Controller/userMasterController.js";
import designationController from "../Controller/designationMasterController.js";
import loginController from "../Controller/loginController.js";
import { userValidation } from "../Validation/userValidation.js";
import { loginValidation } from "../Validation/loginValidation.js";
import JWT from "../Middleware/auth.js";

const app = express();

app.use(express.json());

const route = Router();

route.post("/login", validate(loginValidation), loginController.loginUser);

route.post(
  "/create",
  [JWT.authenticatieJWT, validate(userValidation)],
  userMasterController.createUser
);

route.post("/designation", designationController);

export default route;
