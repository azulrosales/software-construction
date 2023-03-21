exports.get_signup = (req, res) => {
    res.render(__dirname + '/../views/signup');
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/hot_cakes/lista');
    });
};
