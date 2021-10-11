import { Router } from 'express';
import { AuthenticateUserController } from '../services/AutenticateUser/AuthenticateUserController'

export const loginRouter = Router()

const authenticateUserController = new AuthenticateUserController()

loginRouter.post('/', authenticateUserController.handle) 