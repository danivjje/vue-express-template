import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import basicRouter from '@/routes/basic.routes';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(basicRouter);

app.listen(port, () => {
  console.log('Server started. Port: ' + port);
});
