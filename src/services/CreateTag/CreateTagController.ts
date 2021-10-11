import { container } from 'tsyringe'
import { CreateTagService } from './CreateTagService'
import { Request, Response } from 'express'

export class CreateTagController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createTagService = container.resolve(CreateTagService);
    
    const { name } = req.body;

    const newTag = await createTagService.execute(name);

    return res.status(200).json(newTag)
  }

}