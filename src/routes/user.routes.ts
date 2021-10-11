import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../services/CreateUser/CreateUserController';
import { ListUsersController } from '../services/ListUsers/ListUsersController';

export const usersRouter = Router()

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

usersRouter.post('/', createUserController.handle);

usersRouter.get('/', ensureAuthenticated, listUsersController.handle);