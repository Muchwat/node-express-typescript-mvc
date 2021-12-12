import jwt from 'jsonwebtoken';
import config from "config";
const key: string = config.get('jwt.key');

const verifyToken = (req: any, res: any, next: any) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const decoded = jwt.verify(token, key);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }

  return next();
};

export default verifyToken;

