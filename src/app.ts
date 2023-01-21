import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db';

//  * INTIALIZE  DOTENV TO LOAD VARIABLES FROM .ENV fILE
dotenv.config();

//  * CREATE PORT VARIABLE FROM .ENV FILE
const PORT: string | number = process.env.PORT || 4000;

//  * INITIALIZE EXPRESS
const app: Express = express();

// * CONNECT DATABASE
connectDB();

//  * MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * LISTENING ON PORT
app.listen(PORT, () => console.log(`Server is running on a port ${PORT}`));
