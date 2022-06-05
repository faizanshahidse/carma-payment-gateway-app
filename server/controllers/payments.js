import asyncHandler from 'express-async-handler';
import Joi from 'joi';

import db from '../models';
import messages from '../config/messages';
// import CardDetail from '../models/card_detail';

const addCreditCardDetails = asyncHandler(async (req, res) => {
  console.log('credit card details....');

  // const schema = Joi.object().keys({
  //   cardHolderName: Joi.string().required(),
  //   cardNo: Joi.string()
  //     .creditCard()
  //     .required()
  //     .error(new Error('Invalid Card Number!')),
  //   cvv: Joi.string().required(),
  //   expiryDate: Joi.date().required(),
  // });

  const { cardNo, cvv, cardHolderName, expiryDate } = req.body;

  const { card_detail: CardDetail } = db;

  const data = {
    cardNo,
    cvv,
    cardHolderName,
    expiryDate,
  };

  const newCardDetails = await CardDetail.create(data);

  res
    .status(201)
    .json({ message: messages.default.success, data: newCardDetails });
});

export { addCreditCardDetails };
