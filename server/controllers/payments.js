import asyncHandler from 'express-async-handler';

const addCreditCardDetails = asyncHandler(() => {
  console.log('credit card details....');
});

export { addCreditCardDetails };
