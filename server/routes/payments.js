import express from 'express';
const router = express.Router();

import { addCreditCardDetails } from '../controllers/payments';

router.get('/add', addCreditCardDetails);

export default router;
