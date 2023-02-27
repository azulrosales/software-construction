// Functions

const filesystem = require("fs");

const data = filesystem.readFileSync("numbers.txt", 'utf-8').split(" ");
console.log(data);
const num = data.map(Number);

function average(array){
    let sum = 0;
    array.forEach(item => {
        sum += item;
    });
    const average = sum/array.length;
    console.log(average);
    return average;
}

function write(str){
    filesystem.writeFileSync("string.txt", str);
}

function mirrorString(str){
    let mirroredStr = str.split('').reverse().join('');
    return mirroredStr;
}

// Calling the functions
const avg = average(num);
console.log(avg);

write('hola :)');

const reversed_str = mirrorString('sesadillas')
console.log(reversed_str);


// Creating a server

const http = require("http");

const server = http.createServer( (request, response) => {
    console.log(request.url);
    //response.setHeader("Content-Type", "text/html");
    response.write("Request de Node");
    response.end();
});
server.listen(3000);
