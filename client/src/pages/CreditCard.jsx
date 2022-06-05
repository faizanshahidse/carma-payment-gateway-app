import React, { useState } from 'react';
import Card from '../components/Card';

const CreditCardPage = () => {
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNo: '',
    cvv: '',
    cardHolderName: '',
    expiryDate: '',
  });

  const onSubmit = (value) => {
    console.log(value);
    console.log('handleSubmit....');
  };

  return <Card onSubmit={onSubmit} />;
};

export default CreditCardPage;
