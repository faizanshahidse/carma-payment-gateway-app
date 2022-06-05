import React from 'react';
import Styles from '../Styles';
import { Form, Field } from 'react-final-form';
import {
  formatCreditCardNumber,
  formatCVC,
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
          <form onSubmit={() => handleSubmit(values)}>
            <div>
              <Field
                name='number'
                component='input'
                type='text'
                pattern='[\d| ]{16,22}'
                placeholder='Card Number'
                format={formatCreditCardNumber}
              />
            </div>
            <div>
              <Field
                name='name'
                component='input'
                type='text'
                placeholder='Name'
              />
            </div>
            <div>
              <Field
                name='expiry'
                component='input'
                type='text'
                value={values.expiry}
                pattern='\d\d/\d\d'
                placeholder='Valid Thru'
                format={formatExpirationDate}
              />
              <Field
                name='cvc'
                component='input'
                type='text'
                pattern='\d{3,4}'
                placeholder='CVC'
                format={formatCVC}
              />
            </div>
            <div className='buttons'>
              <button type='submit' disabled={submitting}>
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
