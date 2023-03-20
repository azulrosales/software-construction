exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/hot_cakes/lista');
    });
};
