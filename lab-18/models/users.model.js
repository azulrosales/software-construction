const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(user) {
        this.nombre = user.nombre || 'John  Doe';
        this.username = user.username || 'johndoe';
        this.password = user.password || 'johndoehohndoe';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12)
            .then((password_cifrado) => {
                return db.execute(`INSERT INTO users (nombre, username, password)
                VALUES (?, ?, ?)`, [this.nombre, this.username, password_cifrado]);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    static fetch_one(username){
        return db.execute(`SELECT * FROM users WHERE username = ?`, [username]);
    }

}