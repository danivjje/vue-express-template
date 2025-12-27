import { getHello } from '@/controllers/basic.controller';
import express, { type Router } from 'express';

const basicRouter: Router = express.Router();

basicRouter.get('/', getHello);

export default basicRouter;
