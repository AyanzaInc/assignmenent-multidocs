import { Router } from 'express';
import * as DocService  from '../controllers/DocController';

const docRouter = Router();

docRouter.get('/doc', DocService.getMainDoc);
docRouter.get('/doc/:id', DocService.get);

export default docRouter;
