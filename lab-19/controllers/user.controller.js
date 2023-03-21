const User = require('../models/users.model');
const bcrypt = require('bcryptjs');

exports.get_login = (req, res) => {
    let mensaje = '';
    if(req.session.mensaje != ''){
        mensaje = req.session.mensaje;
        req.session.mensaje = '';
    }

    res.render(__dirname + '/../views/login', {
        mensaje: mensaje,
        isLoggedIn: req.session.isLoggedIn || false,
        nombre: req.session.nombre || '',
    });
};

exports.post_login = (req, res) => {
    User.fetch_one(req.body.username)
        .then(([rows, fieldData]) => {
            if (rows.length > 0) {
                bcrypt.compare(req.body.password, rows[0].password)
                    .then((doMatch) => {
                        if(doMatch){
                            req.session.isLoggedIn = true;
                            req.session.nombre + rows[0].nombre;
                            User.get_privilegios(rows[0].username)
                                .then(([consulta_privilegios, fieldData]) => {
                                    console.log(consulta_privilegios);

                                    const privilegios = [];

                                    for(let privilegios of consulta_privilegios){
                                        privilegios.push(privilegio.nombre);
                                    }

                                    console.log(privilegios);

                                    req.session.privilegios = privilegios;

                                    return req.session.save(err => {
                                        response.redirect('/buy/comprar');
                                    });
                                })
                                .catch((error) => {
                                    console.log(error);
                                })
                        }
                    })
            } else {
                req.session.mensaje = 'El usuario y/o contraseña no coinciden';
                res.redirect('/user/login');
            }
        })
        .catch((error) => {
            console.log(error)
        });
}


exports.get_signup = (req, res) => {
    res.render(__dirname + '/../views/signup', {
        isLoggedIn: req.session.isLoggedIn || false,
        nombre: req.session.nombre || '',
    });
};

exports.post_signup = (req, res) => {
    const nuevo_usuario = new User({
        nombre: req.body.nombre,
        username: req.body.username,
        password: req.body.password,
    });

    nuevo_usuario.save()
        .then(([rows, fieldData]) => {
            req.session.mensaje = 'Usuario registrado';
            res.redirect('/user/login');
        })
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/user/login');
    });
};
