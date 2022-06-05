import asyncHandler from 'express-async-handler';

import db from '../models';

const addCreditCardDetails = asyncHandler((req, res) => {
  console.log('credit card details....');

  const { cardNo, cvv, cardHolderName, expiryDate } = req.body;

  const { card_detail: CardDetail } = db;

  console.log('Database Data.................', CardDetail);

  res.json({ message: 'congratulations!' });
});

export { addCreditCardDetails };
