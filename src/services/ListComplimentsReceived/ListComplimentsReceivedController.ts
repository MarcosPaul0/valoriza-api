import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListComplimentsReceivedService } from './ListComplimentsReceivedService';

export class ListComplimentsReceivedController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user_id } = req

    const listComplimentsReceivedService = container.resolve(ListComplimentsReceivedService);

    const complimentsReceived = await listComplimentsReceivedService.execute(user_id);

    return res.status(200).json(complimentsReceived);
  }
}