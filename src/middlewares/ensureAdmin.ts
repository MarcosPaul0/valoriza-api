import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/implements/UsersRepository';

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  const { user_id } = req;

  const usersRepository = getCustomRepository(UsersRepository);

  const { admin } = await usersRepository.findById(user_id);

  if (admin) {
    return next();
  }

  return res.status(401).json({ error: 'Unauthorized!'})
}