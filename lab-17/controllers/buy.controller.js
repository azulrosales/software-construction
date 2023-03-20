const products = require('../models/products.model');

exports.get_comprar = (req, res) => {
    const cookies = req.get('Cookie') || '';
    let consultas =  cookies.split('=')[1] || 0; 
    //console.log(consultas); // NaN; connect.sid
    consultas++;
    res.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    const id = req.params.id || 0;
    products.fetch(id)
        .then(([rows, fieldData]) => {
            //console.log(rows);
            //console.log(fieldData);
            res.render(__dirname + '/../views/comprar', { 
                products: rows,
                latest_product: req.session.latest_product || '',
            });
        })
        .catch(error => {
            console.log(error);
        });
};

const isObjectEmpty = (objectName) => {
    return Object.keys(objectName).length === 0;
}

exports.get_carrito = (req, res) => {
    let data = req.body;
    const { cacahuates, PF, flores } = req.body;
    if (isObjectEmpty(data)) res.render(__dirname + '/../views/comprar');
    else {
        let dataJSON = JSON.parse(JSON.stringify(data));
        var bufferData = "";
        if (dataJSON.cacahuates == "on") bufferData += "Cacahuates";
        if (dataJSON.PF == "on") bufferData += "Pollo Frito";
        if (dataJSON.flores == "on") bufferData += "Flores";
        res.render(__dirname + '/../views/carrito', { caca: cacahuates, pf: PF, flor: flores, products: products.fetch_all()});
    }
};

exports.post_carrito = (req, res) => {
    let data = req.body;
    const {Cacahuates, PolloFrito, Flores} = req.body;
    let products_data = products.fetch_all();
    if (isObjectEmpty(data)) res.render(__dirname + '/../views/comprar');
    else {
        let dataJSON = JSON.parse(JSON.stringify(data));
        var bufferData = "";
        if (dataJSON.Cacahuates == "on") bufferData += "Cacahuates";
        if (dataJSON.PolloFrito == "on") bufferData += "Pollo Frito";
        if (dataJSON.Flores == "on") bufferData += "Flores";
        res.render(__dirname + '/../views/carrito', {caca:Cacahuates, pf:PolloFrito, flor:Flores, products: products_data});
    }
};
