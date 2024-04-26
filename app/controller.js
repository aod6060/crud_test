/*
    This is were all of the controller will be placed in
*/
const model = require('./model')
model.init();

function index(req, res) {
    model.getAllMessages().then((values) => {
        console.log(values);

        res.render("index", {values: values});
    });
}

module.exports = {
    init: (app) => {
        // Handle roughts
        app.get('/', index);
    }
};