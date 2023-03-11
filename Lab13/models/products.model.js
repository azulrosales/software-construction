const products = [
    {
        nombre: "Cacahuates",
        imagen: "",
        handle: "@cacahuates",
        precio: 20,
    },
    {
        nombre: "PolloFrito",
        imagen: "",
        handle: "@pollo",
        precio: 200,
    },
    {
        nombre: "Flores",
        imagen: "",
        handle: "@flores",
        precio: 250,
    },
]

module.exports = class Product{
    constructor(product){
        this.nombre = product.nombre;
        this.imagen = product.imagen;
        this.handle = product.handle;
        this.precio = product.precio;
    }

    save(){
        products.push(this);
    }

    static fetch_all(){
        return products;
    }
}