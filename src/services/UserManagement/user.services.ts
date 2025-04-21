import { hashSync } from "bcrypt-ts";

import prisma from "../../../prisma/client.js";
import { IRegisterUser } from "../../types/UserManagement/user.types.js";

const createUser = async (userData: IRegisterUser) => {
  userData.password = hashSync(userData.password, 8);

  const userCreated = await prisma.user.create({
    data: userData,
  });

  return { ...userCreated };
};

const findUserByEmail = async (email: string) => {
  const userFound = await prisma.user.findUnique({
    where: { email },
  });
  return userFound;
};

export default {
  createUser,
  findUserByEmail,
};
