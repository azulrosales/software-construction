const db = require('../util/database');

module.exports = class Product{
    constructor(product){
        this.nombre = product.nombre;
        this.imagen = product.imagen;
        this.handle = product.handle;
        this.precio = product.precio;
    }

    save(){
        return db.execute(
            'INSERT INTO products(nombre, imagen, handle, precio) VALUES (?, ?, ?, ?)',
            [this.nombre, this.imagen, this.handle, this.precio]
        );
    }

    static fetch(id){
        let query = `SELECT * FROM products`;
        if (id != 0) {
            query += ' WHERE id = ?'
            return db.execute(query, [id]);
        } 
        return db.execute(query);
    }
}