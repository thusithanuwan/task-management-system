import express, {json, Router} from "express";
import mysql, {Pool} from "promise-mysql";
import dotenv from 'dotenv';

dotenv.config();

export const router:Router = express.Router();
let pool: Pool;

initPool();

async function initPool() {
    pool = await mysql.createPool({
        host:process.env.host,
        port:+process.env.port!,
        database:process.env.database,
        user:process.env.username,
        password:process.env.password,
        connectionLimit:+process.env.connection_limit!
    })};