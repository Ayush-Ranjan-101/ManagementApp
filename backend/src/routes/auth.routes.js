import { Router } from "express";
import {
  login,
  logoutUser,
  registerUser,
} from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middlewares.js";
import {
  userloginValidator,
  userRegisterValidator,
} from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
const router = Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userloginValidator(), validate, login);

//Secure routes
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
