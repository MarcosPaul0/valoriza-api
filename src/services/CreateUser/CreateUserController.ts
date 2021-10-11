import { Request, Response } from 'express';
import { CreateUserService } from './CreateUserService'
import { container } from 'tsyringe'

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createUserService = container.resolve(CreateUserService)
    
    const { name, email, password, admin } = req.body

    const newUser = await createUserService.execute({ 
      name, 
      email,
      password,
      admin
    })

    return res.status(200).json(newUser)
  }
}