import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface IRequest extends Request {
  userId: any;
}

function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token: any = req.header("Authorization");
  if (!token) {
    res.status(401).json({ error: "Access denied" });
  }
  try {
    const decoded = jwt.verify(token, "your-secret-key") as { userId?: string };
    (req as IRequest).userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: `${error}:Invalid token` });
  }
}

export default verifyToken;
