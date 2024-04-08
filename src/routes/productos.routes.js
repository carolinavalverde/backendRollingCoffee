// import { Router } from "express";
// import {
//   borrarProducto,
//   crearProducto,
//   editarProducto,
//   listarProductos,
//   obtenerProducto,
// } from "../controllers/productos.controllers.js";
// import { check } from "express-validator";
// import validacionProducto from "../helpers/validacionProducto.js";

// const router = Router();

// // app.get('/nuevo/producto',(req, res)=>{
// //     console.log('aqui obtener la lista de todos los productos');
// //     res.send('Aqui enviaremos la lista de productos')
// //    })
// router
//   .route("/productos")
//   .get(listarProductos)
//   .post([validacionProducto],crearProducto);
// router
//   .route("/productos/:id")
//   .get(obtenerProducto)
//   .put(editarProducto)
//   .delete(borrarProducto);

// export default router;

import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";
import { check } from "express-validator";
import validacionProducto from "../helpers/validacionProducto.js";

const router = Router();

router.get('/', (req, res) => {
  console.log('Aquí se obtendrá la lista de todos los productos');
  res.send('Aquí enviaremos la lista de productos');
});

router
  .route("/productos")
  .get(listarProductos)
  .post([validacionProducto], crearProducto);

router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(editarProducto)
  .delete(borrarProducto);

export default router;
