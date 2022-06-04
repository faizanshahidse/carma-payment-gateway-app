import express from 'express';

import payment from './payments';

const app = express();

console.log('helo 1...........');

app.use('/card', payment);

export default app;
