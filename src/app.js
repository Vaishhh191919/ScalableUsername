import express from 'express';
import checkRouter from './routes/checkUsername.js';

const app = express();
app.use(express.json());

app.use('/api/check', checkRouter);

export default app;
