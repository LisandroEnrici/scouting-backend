import { Router } from 'express';
import { getScouts } from '../contollers/scouts.controller.js';

const router = Router();

router.get('/scouts', getScouts)

export default router;
