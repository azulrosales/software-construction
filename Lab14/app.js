const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views','views/partials');

app.use(express.static(path.join(__dirname)));

const homeModule = require("./routes/home.routes");
const buyModule = require("./routes/buy.routes");
const newModule = require("./routes/new.routes");
const userModule = require("./routes/user.routes");

app.use('/', homeModule);
app.use('/buy', buyModule);
app.use('/new', newModule);
app.use('/user', userModule);

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.listen(3000);