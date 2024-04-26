/*
    This is were all of the controller will be placed in
*/
const model = require('./model')
model.init();

function index(req, res) {
    model.view_all_messages().then((values) => {
        res.render('index', {values: values});
    });
}

module.exports = {
    init: (app) => {
        // Handle roughts
        app.get('/', index);
    }
};