const db = require('../util/database');

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(user) {
        this.nombre = user.nombre || 'John  Doe';
        this.username = user.username || 'johndoe';
        this.password = user.password || 'johndoehohndoe';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(`INSERT INTO users (nombre, username, password) VALUES (?, ?, ?)`, 
        [this.nombre, this.username, this.password]);
    }

}