import express from 'express';

import payment from './payments';

const app = express();

app.use('/card', payment);

export default app;
