import { Router } from 'express';
import { getUser, createUser, updateUser, deleteUser , login} from '../controllers/user.controller.js';
import accountExists from '../middlewares/accountExists.mid.js';
import verifyHash from '../middlewares/verifyHash.mid.js';
import createHash from '../middlewares/createHash.mid.js';
import createToken from '../middlewares/createToken.mid.js';
import verifyToken from '../middlewares/verifyToken.mid.js';
const router = Router();

router.get('/user/:id',[verifyToken], getUser);
router.post('/user',[accountExists, createHash], createUser);
router.post('/login',[verifyHash, createToken], login)
router.put('/user/:id',[verifyToken], updateUser);
router.delete('/user/:id',[verifyToken], deleteUser);

export default router;
