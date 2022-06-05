import asyncHandler from 'express-async-handler';
import Joi from 'joi';

import db from '../models';
import messages from '../config/messages';

const addCreditCardDetails = asyncHandler(async (req, res) => {
  const { cardNo, cvv, cardHolderName, expiryDate } = req.body;

  const data = {
    cardNo: cardNo.replace(/\s/g, ''),
    cvv,
    cardHolderName,
    expiryDate,
  };

  console.log('data..............', data);

  const { card_detail: CardDetail } = db;

  const schema = Joi.object().keys({
    cardHolderName: Joi.string().required(),
    cardNo: Joi.string()
      .max(16)
      .creditCard()
      .required()
      .error((err) => {
        return err;
      }),
    cvv: Joi.string().max(3).required(),
    expiryDate: Joi.date().required(),
  });

  await schema.validateAsync(data);

  const newCardDetails = await CardDetail.create(data);

  res
    .status(201)
    .json({ message: messages.default.success, data: newCardDetails });
});

export { addCreditCardDetails };
