import { Router } from 'express';
import docRouter from './docRouter';

const router = Router();

router.use(docRouter);

export default router;
