import { Router } from "express";
import { obtenerTodos } from "../repository/producto.repository";

const router = Router();

router.get("/productos", async (_req, res) => {
    try {
        const productos = await obtenerTodos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({error:"Error al obtener productos."})
    }
});

export default router;