import asyncHandler from 'express-async-handler';

const addCreditCardDetails = asyncHandler((req, res) => {
  console.log('credit card details....');

  const { cardNo, cvv, cardHolderName, expiryDate } = req.body;

  res.json({ message: 'congratulations!' });
});

export { addCreditCardDetails };
