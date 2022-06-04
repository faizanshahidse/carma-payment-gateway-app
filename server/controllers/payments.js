import asyncHandler from 'express-async-handler';

const addCreditCardDetails = asyncHandler((req, res) => {
  console.log('credit card details....');
  res.json({ message: 'success' });
});

export { addCreditCardDetails };
