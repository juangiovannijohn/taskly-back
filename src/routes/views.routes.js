import { Router } from 'express';
import {getUserBoard, getNavbar} from '../controllers/views.controller.js';
import verifyToken from '../middlewares/verifyToken.mid.js';
const router = Router();

router.get('/user-board/:id',[verifyToken], getUserBoard);
router.get('/nav-bar/:id',[verifyToken], getNavbar);

export default router;
