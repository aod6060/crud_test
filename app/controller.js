/*
    This is were all of the controller will be placed in
*/

module.exports = {
    init: (conf) => {
        // Controller Routs
        this.index = (req, res) => {
            res.render('index')
        }

        // Setting up routs.
        conf.app.get('/', this.index);
    }
};