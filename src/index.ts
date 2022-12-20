import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as bodyParser from "body-parser";

dotenv.config();
import SellRoute from './routes/sell.router';


const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use('/sell', SellRoute(express.Router()));
app.listen(port, () => {
  console.log(`⚡️[server]: Sell Server is running at https://localhost:${port}`);
}); 