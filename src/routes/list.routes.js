import { Router } from 'express';
import { getLists, getList,  createList, updateList, deleteList } from '../controllers/list.controller.js';
import verifyToken from '../middlewares/verifyToken.mid.js';

const router = Router();
router.use(verifyToken);

router.get('/list',  getLists)
router.get('/list/:id',  getList);
router.post('/list',  createList);
router.put('/list/:id',  updateList);
router.delete('/list/:id',  deleteList);

export default router;
