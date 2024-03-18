import Producto from "../database/models/producto.js";

export const listarProductos = async (req, res) => {
  try {
    //pedir a la BD la lista de todos los productos
    const productos = await Producto.find();
    //responder al frontend con el array de productos
    res.status(200).json(productos);
  } catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: "Error al buscar los productos" });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    //verificar si el producto existe con el id correspondiente
    console.log(req.params.id);
    const productoBuscado = await Producto.findById(req.params.id);
    //si no existe contestar con un status404 not found
    if (!productoBuscado) {
      return res
        .status(404)
        .json({ mensaje: "El id enviado no corresponde a ningun producto" });
    }
    //si exoste el producto eviarlo al frontend, status200
    res.status(200).json(productoBuscado);
  } catch (err) {
    console.error(err);
    res.status(400).json({ mensaje: "Error al obtener el producto" });
  }
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
