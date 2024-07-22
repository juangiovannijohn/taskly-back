import jwt from "jsonwebtoken";

async function createToken(req, res, next) {
  try {
    const user = req.user;
    const token = jwt.sign(
      { 
        email: user.email, 
        id: user._id, 
        name: user.name 
      },
      process.env.SECRET_JWT,
      { expiresIn: 60 * 60 * 24 }
    );
    req.token = token;
    return next();
  } catch (error) {
    return next(error);
  }
}

export default createToken;
