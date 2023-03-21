exports.get_home = (req, res) => {
    res.render(__dirname + '/../views/index', {
        isLoggedIn: req.session.isLoggedIn || false,
        nombre: req.session.nombre || '',
    });
};