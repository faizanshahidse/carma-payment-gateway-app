import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/Card';
import { add, clearCardDetails } from '../features/creditCardSlice';
import { addStr } from '../utils/appendString';

const CreditCardPage = () => {
  const dispatch = useDispatch();
  const { newCreditCard, loading, err, done } = useSelector(
    (state) => state.creditCard,
  );

  const onSubmit = (values) => {
    values.cardNo = values.cardNo.slice(0, 19);
    values.cvv = values.cvv.slice(0, 3);
    values.expiryDate = values.expiryDate.slice(0, 5);

    values.expiryDate = addStr(values.expiryDate, 3, '01/');

    dispatch(add(values));
  };

  useEffect(() => {
    if (done) {
      alert('Credit card details has been added successfully!');
    } else if (err.message) {
      alert(err.message);
    }

    return () => dispatch(clearCardDetails());
  }, [done, err.message]);

  return <Card onSubmit={onSubmit} />;
};

export default CreditCardPage;
