import React from 'react';
import Styles from '../Styles';
import { Form, Field } from 'react-final-form';
import {
  formatCreditCardNumber,
  formatCVV,
  formatExpirationDate,
} from '../utils/creditCard';

const Card = ({ onSubmit }) => (
  <Styles>
    <h1>Enter Credit Card Details</h1>
    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
        active,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name='cardNo'
                component='input'
                type='text'
                pattern='[\d| ]{16,22}'
                placeholder='Card Number'
                format={formatCreditCardNumber}
              />
            </div>
            <div>
              <Field
                name='cardHolderName'
                component='input'
                type='text'
                placeholder='Name'
              />
            </div>
            <div>
              <Field
                name='expiryDate'
                component='input'
                type='text'
                pattern='\d\d/\d\d'
                placeholder='Valid Thru'
                format={formatExpirationDate}
              />
              <Field
                name='cvv'
                component='input'
                type='text'
                pattern='\d{3,4}'
                placeholder='CVV'
                format={formatCVV}
              />
            </div>
            <div className='buttons'>
              <button
                type='submit'
                disabled={
                  submitting ||
                  !values.cardNo ||
                  !values.cardHolderName ||
                  !values.expiryDate ||
                  !values.cvv
                }
              >
                Submit
              </button>
              <button
                type='button'
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <h2>Values</h2>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        );
      }}
    />
  </Styles>
);

export default Card;
