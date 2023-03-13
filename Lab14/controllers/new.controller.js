const Producto = require('../models/products.model');

exports.get_nuevo = (req, res) => {
    res.render(__dirname + '/../views/nuevo_producto');
};

exports.post_nuevo = (req, res) => {
    const nuevo_producto = new Producto({
        nombre: req.body.nombre,
        imagen: req.body.imagen,
        handle: req.body.handle,
        precio: req.body.precio,
    });

    nuevo_producto.save();

    req.session.latest_product = nuevo_producto.nombre;

    res.render(__dirname + '/../views/comprar');
};
