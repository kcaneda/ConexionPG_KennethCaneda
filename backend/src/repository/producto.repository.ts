import { pool } from "../config/database";

export const obtenerTodos = async() => {
    const result = await pool.query("SELECT * FROM productos");
    return result.rows;
};