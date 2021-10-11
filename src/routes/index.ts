import Router from 'express';
import { usersRouter } from './user.routes';
import { tagRouter } from './tag.routes';
import { loginRouter } from './login.routes';
import { complimentsRouter } from './compliment.routes';

export const router = Router();

router.use('/users', usersRouter);

router.use('/tags', tagRouter);

router.use('/login', loginRouter);

router.use('/', complimentsRouter);