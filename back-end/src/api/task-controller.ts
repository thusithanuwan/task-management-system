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

type Task = {
    id:number,
    description:string,
    status:'COMPLETE' | 'NOT_COMPLETED' | undefined
}

/*  Get All task*/
router.get("/",async (req,res)=>{
    const task = await pool.query('SELECT * FROM task');
    res.json(task);
});

/* Save a new task */
router.post("/",async (req,res)=>{
    const task = (req.body as Task);
    if(!task.description?.trim()){
        res.sendStatus(400);
        return;
    }
    const result =  await pool.query('INSERT INTO task (description) VALUE (?)',[task.description]);
    task.id = result.insertId;
    res.status(201).json(task);
});

/* Delete an existing task*/
router.delete("/:taskId",async (req,res)=>{
    const result = await pool.query('DELETE FROM task WHERE id=?',[req.params.taskId]);
    res.sendStatus(result.affectedRows ? 204 : 404);
});

/* Update an existing task */
router.patch("/:taskId",async (req,res) => {
    const task = (req.body as Task);
    task.id = +req.params.taskId;
    if (!task.status){
        res.sendStatus(400);
        return;
    }
    const result = await pool.query('UPDATE task SET description=?, status=? WHERE id=?',[task.description,task.description, task.id])
    res.sendStatus(result.affectedRows ? 204 : 404);
});