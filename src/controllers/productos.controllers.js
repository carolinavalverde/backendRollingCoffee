import Producto from "../database/models/producto.js";

export const listarProductos = (req, res) => {
  console.log("Aquí obtener la lista de todos los productos");
  res.send("Aquí enviaremos la lista de productos");
};

export const crearProducto = async (req, res) => {
  try {
    //todo: validar los datos del body
    //crear un producto basado en el mpdelo producto
    const productoNuevo = new Producto(req.body);
    //pedir a la BD crear el prdicto
    await productoNuevo.save();
    //enviar una respuesta cuando puedo crear efectivamente el producto 201
    res.status(201).jason({ mensaje: "El producto fue creado correctamente" });
  } catch (error) {
    //enviar una respuesta de error
    console.error(error);
    res.status(500).json({
      mensaje: "Error al crear el producto",
    });
  }
};
