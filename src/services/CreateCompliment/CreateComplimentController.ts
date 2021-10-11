import { container } from 'tsyringe';
import { CreateComplimentService } from './CreateComplimentService';
import { Request, Response } from 'express';

export class CreateComplimentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createComplimentService = container.resolve(CreateComplimentService);

    const user_sender = req.user_id;

    const { 
      tag_id,
      user_receiver,
      message
    } = req.body;

    const newCompliment = await createComplimentService.execute({
      tag_id,
      user_sender,
      user_receiver,
      message
    });

    return res.status(200).json(newCompliment);
  }
}