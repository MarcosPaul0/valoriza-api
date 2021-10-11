import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserService } from './AuthenticateUserService';

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response>{
    const authenticateUserService = container.resolve(AuthenticateUserService);

    const { email, password } = req.body;

    const token = await authenticateUserService.execute({
      email,
      password
    })

    return res.json(token)
  }
}