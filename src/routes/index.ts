import express from "express";

import constant from "../constants/api.js";
import userManagementRoutes from "./UserManagement/index.js";

const router = express.Router();

const defaultRoutes = [
  {
    path: constant.USER_MANAGEMENT,
    route: userManagementRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
