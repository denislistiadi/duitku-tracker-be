import express from "express";

import authController from "../../controllers/UserManagement/auth.controller.js";
import validate from "../../middlewares/validate.js";
import authValidation from "../../validations/UserManagement/auth.validation.js";

const router = express.Router();

router.post("/register", validate(authValidation.register), authController.register);

export default router;
