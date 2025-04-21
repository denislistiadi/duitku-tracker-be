import { Request, Response } from "express";
import httpStatus from "http-status";

import { userServices } from "../../services/UserManagement/index.js";
import { IRegisterUser } from "../../types/UserManagement/user.types.js";
import ApiError from "../../utils/apiError.js";
import catchAsync from "../../utils/catchAsync.js";

const register = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body as IRegisterUser;

  const existingUser = await userServices.findUserByEmail(email);

  if (existingUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }

  const userCreated = await userServices.createUser(req.body as IRegisterUser);

  res.status(httpStatus.CREATED).send({
    data: { ...userCreated },
    message: "Register User Success",
    status: httpStatus.CREATED,
  });
});

export default {
  register,
};
