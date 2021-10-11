import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListComplimentsSendedService } from './ListComplimentsSendedService';

export class ListComplimentsSendedController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user_id } = req;

    const listComplimentsSendedService = container.resolve(ListComplimentsSendedService);

    const complimentsSended = await listComplimentsSendedService.execute(user_id);

    return res.status(200).json(complimentsSended);
  }
}