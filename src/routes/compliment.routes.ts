import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateComplimentController } from '../services/CreateCompliment/CreateComplimentController';
import { ListComplimentsSendedController } from '../services/ListComplimentsSended/ListComplimentsSendedController';
import { ListComplimentsReceivedController } from '../services/ListComplimentsReceived/ListComplimentsReceivedController';

export const complimentsRouter = Router();

const createComplimentController = new CreateComplimentController();
const listComplimentsSendedController = new ListComplimentsSendedController();
const listComplimentsReceivedController = new ListComplimentsReceivedController();

complimentsRouter.post('/compliments', ensureAuthenticated, createComplimentController.handle);

complimentsRouter.get('/compliments/sended', ensureAuthenticated, listComplimentsSendedController.handle);

complimentsRouter.get('/compliments/received', ensureAuthenticated, listComplimentsReceivedController.handle);