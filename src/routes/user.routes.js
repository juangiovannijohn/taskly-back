import { Router } from 'express';
import { getUser, createUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import {accountExist} from '../middlewares/accountExist.js'

const router = Router();

router.get('/user/:id', getUser);
router.post('/user', createUser, accountExist);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;
