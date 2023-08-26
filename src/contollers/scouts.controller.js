import { pool } from "../db.js";

export const getScouts = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM SCOUT');
    res.json(rows)
};