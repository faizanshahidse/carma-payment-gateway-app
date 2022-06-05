import express from 'express';
const router = express.Router();

import { addCreditCardDetails } from '../controllers/payments';

router.post('/add', addCreditCardDetails);

export default router;
