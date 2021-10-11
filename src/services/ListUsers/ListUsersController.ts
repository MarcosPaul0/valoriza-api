import { container } from 'tsyringe';
import { ListUsersService } from './ListUsersService';
import { Request, Response } from 'express';

export class ListUsersController {
  async handle(req: Request, res:Response): Promise<Response> {
    const listUsersService = container.resolve(ListUsersService);

    const users = await listUsersService.execute(); 

    return res.status(200).json(users);
  }
}