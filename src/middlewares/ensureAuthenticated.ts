import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if(!authToken) {
    return res.status(401).json({ message: 'Token missing!' });
  }

  const token = authToken.split(' ')[1];

  try {
    const { sub } = verify(token, process.env.TOKEN_SECRET_PRIVATE_KEY) as IPayload;
    
    req.user_id = sub;
    
    return next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
}