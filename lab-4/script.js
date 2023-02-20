// Función 1
function generarTabla() {
    // Pedir al usuario que ingrese un número
    var numero = prompt("Ingrese un número:");
  
    // Convertir la entrada a un número entero
    numero = parseInt(numero);
  
    // Verificar si el número es válido
    if (isNaN(numero)) {
      alert("Por favor, ingrese un número válido.");
      return;
    }
  
    // Crear una tabla para mostrar los resultados
    var tabla = "<table><thead><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr></thead><tbody>";
  
    // Generar filas para cada número del 1 al número dado
    for (var i = 1; i <= numero; i++) {
      var cuadrado = i * i;
      var cubo = i * i * i;
      tabla += "<tr><td>" + i + "</td><td>" + cuadrado + "</td><td>" + cubo + "</td></tr>";
    }
  
    // Cerrar la tabla
    tabla += "</tbody></table>";
  
    // Mostrar la tabla en el documento HTML
    document.write(tabla);
    document.write('<br>');
  }
  
  // Prueba
  console.assert(generarTabla(5) === "<table><thead><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>2</td><td>4</td><td>8</td></tr><tr><td>3</td><td>9</td><td>27</td></tr><tr><td>4</td><td>16</td><td>64</td></tr><tr><td>5</td><td>25</td><td>125</td></tr></tbody></table>", "Error: la función no devuelve la tabla esperada.");


// Función 2
function sumaAleatoria() {
  // Generar dos números aleatorios entre 1 y 10
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;

  // Pedir al usuario que ingrese el resultado de la suma
  var resultado = num1 + num2;
  var respuesta = parseInt(prompt("¿Cuál es la suma de " + num1 + " y " + num2 + "?"));
  var tiempo = new Date().getTime() - inicioTiempo;
  var mensaje;

  if (respuesta === resultado) {
    mensaje = "¡Correcto!";
  } else {
    mensaje = "Incorrecto. La respuesta correcta es " + resultado;
  }
  mensaje += " Tiempo: " + tiempo/1000 + " segundos.";
  document.write(mensaje);
  document.write('<br><br>');
}

// Prueba
var inicioTiempo = new Date().getTime();
console.assert(sumaAleatoria() === undefined, "Error: La función debe devolver undefined");


// Función 3
function contador(arr) {
    var negativos = 0;
    var ceros = 0;
    var mayores = 0;
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        negativos++;
      } else if (arr[i] === 0) {
        ceros++;
      } else {
        mayores++;
      }
    }
  
    var resultado = "Negativos: " + negativos + ", Ceros: " + ceros + ", Mayores: " + mayores;
    document.write(resultado);
    document.write('<br><br>');

    return resultado;
}

// Pruebas 
console.assert(contador([1, 2, 3, 4, 5]) === "Negativos: 0, Ceros: 0, Mayores: 5", "Error: contador([1, 2, 3, 4, 5])");
console.assert(contador([-1, 0, 1]) === "Negativos: 1, Ceros: 1, Mayores: 1", "Error: contador([-1, 0, 1])");
console.assert(contador([-1, -2, 0, 1, 2]) === "Negativos: 2, Ceros: 1, Mayores: 2", "Error: contador([-1, -2, 0, 1, 2])");
console.assert(contador([]) === "Negativos: 0, Ceros: 0, Mayores: 0", "Error: contador([])");


// Función 4
function promedios(matriz) {
    let promedios = [];
    for (let i = 0; i < matriz.length; i++) {
      let sum = 0;
      for (let j = 0; j < matriz[i].length; j++) {
        sum += matriz[i][j];
      }
      let promedio = sum / matriz[i].length;
      promedios.push(promedio);
    }
    document.write("Los promedios de cada renglón son: ");
    for (let i = 0; i < promedios.length; i++) {
      document.write(promedios[i] + " ");
    }
    document.write('<br><br>');
}

// Pruebas
console.assert(JSON.stringify(promedios([[1,2,3], [4,5,6], [7,8,9]])) === JSON.stringify([2,5,8]), "Error: Caso de prueba 1");
console.assert(JSON.stringify(promedios([[0,0,0], [0,0,0]])) === JSON.stringify([0,0]), "Error: Caso de prueba 2");
console.assert(JSON.stringify(promedios([[1], [2], [3]])) === JSON.stringify([1,2,3]), "Error: Caso de prueba 3");
console.assert(JSON.stringify(promedios([[-1,-2,-3], [4,5,6], [7,-8,9]])) === JSON.stringify([-2,5,2.67]), "Error: Caso de prueba 4");


// Función 5
function inverso(num) {
    let str = num.toString(); // Convertir el número a una cadena
    let result = ""; // Variable para almacenar el resultado invertido
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }

    document.write("El inverso de " + num + " es " + result);
    document.write('<br><br>');

    return result;
  }
  
console.assert(inverso(123) === 321, 'Prueba 1 fallida');
console.assert(inverso(4567) === 7654, 'Prueba 2 fallida');
console.assert(inverso(100) === 1, 'Prueba 3 fallida');
console.assert(inverso(0) === 0, 'Prueba 4 fallida');
console.assert(inverso(-123) === -321, 'Prueba 5 fallida');


// Función 6
// Definir la clase Book
class Book {
    constructor(title, author, category) {
      this.title = title;
      this.author = author;
      this.category = category;
    }
  }
  
  // Definir la clase Library
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(title, author, category) {
      let book = new Book(title, author, category);
      this.books.push(book);
    }
  
    searchBook(searchTerm) {
      let results = [];
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].title.includes(searchTerm) || this.books[i].author.includes(searchTerm)) {
          results.push(this.books[i]);
        }
      }
      return results;
    }
  
    displayBooks() {
      // Crear un objeto para agrupar los libros por categoría
      let categories = {};
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].category in categories) {
          categories[this.books[i].category].push(this.books[i]);
        } else {
          categories[this.books[i].category] = [this.books[i]];
        }
      }
  
      // Mostrar los libros agrupados por categoría
      let output = "";
      for (let category in categories) {
        output += "<h3>" + category + "</h3>";
        for (let i = 0; i < categories[category].length; i++) {
          output += "<p>" + categories[category][i].title + " - " + categories[category][i].author + "</p>";
        }
      }
      document.write(output);
    }
  }
  
  // Crear una nueva instancia de Library
  let library = new Library();
  
  // Agregar algunos libros
  library.addBook("El señor de los anillos", "J.R.R. Tolkien", "Fantasía");
  library.addBook("Cien años de soledad", "Gabriel García Márquez", "Realismo mágico");
  library.addBook("La metamorfosis", "Franz Kafka", "Ficción");
  library.addBook("El arte de la guerra", "Sun Tzu", "No ficción");
  
  // Buscar libros
  let searchResults = library.searchBook("Tolkien");
  console.assert(searchResults.length === 1, "La búsqueda de 'Tolkien' debería regresar un libro");
  
  // Mostrar todos los libros
  library.displayBooks();
  