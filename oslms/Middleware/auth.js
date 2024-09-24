import jwt from "jsonwebtoken";
import { secretKey } from "../Config/config.js";

const generateToken = (userData) => {
  // Ensure userData only contains necessary information for the token
  const token = jwt.sign(userData, secretKey, {
    expiresIn: "24h", // Token expiration set to 24 hours
  });
  console.log(token, "Generated Token");
  return token;
};

const authenticatieJWT = (req, res, next) => {
  const token = req.headers.authorization.replace("Bearer ", "");
  console.log(token);

  if (!token) {
    return res.status(401).send({
      message: "Access Denied: No Token Provided",
    });
  }

  try {
    //verify token
    console.log(token.split("")[1]);

    const verified = jwt.verify(token, secretKey);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send({
      message: "Invalid Token",
    });
  }
};

const JWT = {
  generateToken,
  authenticatieJWT,
};

export default JWT;
