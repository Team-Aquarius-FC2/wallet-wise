import express, { Request, Response} from "express";
import 'dotenv/config';
import pool from "./models/database.ts";
import cors from "cors"

const app = express();
const PORT = 3000;

