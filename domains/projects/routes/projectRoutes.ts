import express from 'express';
import { listProjects } from '../controllers/projectController';

const router = express.Router();
router.get('/', listProjects);

export default router;
