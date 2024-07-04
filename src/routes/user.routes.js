import { Router } from 'express';
import { getUser, createUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import { accountExists } from '../middlewares/accountExists.mid.js';

const router = Router();

router.get('/user/:id', getUser);
router.post('/user', createUser, accountExists);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;
