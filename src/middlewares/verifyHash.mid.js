import { compareSync } from "bcrypt";
import User from "../models/user.model.js";

async function verifyHash(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const error = new Error("USER NOT FOUND");
      error.status = 404;
      throw error;
    }
    
    const db_pass = user.password;
    const form_pass = req.body.password;
    if (compareSync(form_pass, db_pass)) {
      req.user = user;  // Agrega la información del usuario a la solicitud
      return next();
    }
    const error = new Error("INVALID CREDENTIALS");
    error.status = 400;
    throw error;
  } catch (error) {
    return next(error);
  }
}

export default verifyHash;
