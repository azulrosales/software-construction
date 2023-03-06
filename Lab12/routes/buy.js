const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let router = express.Router();

const isObjectEmpty = (objectName) => {
    return Object.keys(objectName).length === 0;
}
router.get('/comprar', (req, res) => {
    res.render(__dirname + '/../views/comprar');
});

router.get('/carrito', (req, res) => {
    res.render(__dirname + '/../views/carrito');
});

router.post('/carrito', (req, res) => {
    let data = req.body;
    if (isObjectEmpty(data)) res.render(__dirname + '/../views/comprar');
    else {
        const fs = require("fs");
        let dataJSON = JSON.parse(JSON.stringify(data));
        var bufferData = "";
        res.render(__dirname + '/../views/carrito');

        if (dataJSON.cacahuates == "on") bufferData += "Cacahuates";
        if (dataJSON.pf == "on") bufferData += " Pollo Frito ";
        if (dataJSON.flores == "on") bufferData += " Flores";
        fs.writeFileSync("pedidos.txt", bufferData);
        console.log(bufferData);
    }
});


module.exports = router;