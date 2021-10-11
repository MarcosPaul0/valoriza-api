import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateTagController } from '../services/CreateTag/CreateTagController';
import { ListTagsController } from '../services/ListTags/ListTagsController';

export const tagRouter = Router();

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

tagRouter.post('/', ensureAuthenticated, ensureAdmin, createTagController.handle);

tagRouter.get('/', ensureAuthenticated, listTagsController.handle);