import { Router } from 'express';
import { getCards, getCard,  createCard, updateCard, deleteCard } from '../controllers/card.controller.js';
import verifyToken from '../middlewares/verifyToken.mid.js';

const router = Router();
router.use(verifyToken);

router.get('/card', getCards)
router.get('/card/:id', getCard);
router.post('/card', createCard);
router.put('/card/:id', updateCard);
router.delete('/card/:id', deleteCard);

export default router;
