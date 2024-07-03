import { Router } from 'express';
import { getBoards, getBoard,  createBoard, updateBoard, deleteBoard } from '../controllers/board.controller.js';

const router = Router();

router.get('/board', getBoards)
router.get('/board/:id', getBoard);
router.post('/board', createBoard);
router.put('/board/:id', updateBoard);
router.delete('/board/:id', deleteBoard);

export default router;
