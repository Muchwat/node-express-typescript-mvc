import jwt from 'jsonwebtoken';
import config from "config";
const jwtConfig: any = config.get('jwt');

const verifyToken = (req: any, res: any, next: any) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const decoded = jwt.verify(token, jwtConfig.key);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }

  return next();
};

export default verifyToken;

