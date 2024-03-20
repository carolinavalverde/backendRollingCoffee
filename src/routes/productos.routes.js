import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers.js";

const router = Router();

// app.get("/nuevo/producto", (req, res) => {
//     console.log("Aquí obtener la lista de todos los productos");
//     res.send("Aqui enviaremos la lista de productos")
// });

router.route("/productos").get(listarProductos).post(crearProducto)
router.route("/productos/:id").get(obtenerProducto).put(editarProducto).delete(borrarProducto)

export default router