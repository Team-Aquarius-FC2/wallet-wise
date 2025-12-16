import express from 'express';
import type { Request, Response, NextFunction } from 'express';

import 'dotenv/config';
import pool from './model/database'; // import { Pool, QueryResult } from 'pg';
import cors from 'cors';
// import apiRouter from'./routes/api';

const app = express();
const PORT = 3000; // 5432 this is the port in .env

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api", apiRouter); //!We don't need it since we are not modularazing routes

//TODO: Routes
app.get('/test', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM "Adventures"');
    // destructure / stringify / etc BEFORE sending it to the frontend -> data you want is on result.rows[0]
    res.send(`Yay! Database is connected ${JSON.stringify(result.rows[0])}`);
    console.log('Result from DB: ', result);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Womp, womp! Database is not connected ${err}`);
  }
});

app.post('/api/adventure', async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const result = await pool.query(
      'INSERT INTO "Adventures" (name) VALUES ($1) RETURNING *',
      [name]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error creating adventure: ${err}`);
  }
});

//Create gets: for adventure page, adventure detail (expenses and balances sections)

//TODO: 400 error handler
app.use((req, res) => res.sendStatus(404));

//TODO: Global error handler 500
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

export default app;
