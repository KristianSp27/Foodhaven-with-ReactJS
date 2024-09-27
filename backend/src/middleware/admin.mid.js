import { UNAUTHORIZED } from "../constants/httpStatus";
import authMid from "./auth.mid";

const adminMid = (req, res, next) => {
  if (!req.user.isAdmin) res.status(UNAUTHORIZED);

  return next();
};

export default [authMid, adminMid];
