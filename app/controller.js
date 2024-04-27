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

function new_message(req, res) {
    res.render('new');
}

function new_message_error(req, res) {
    console.log(req.params.message);
    res.render('new', {error: req.params.message});
}

function new_message_post(req, res) {
    //console.log(req.body.message);
    //res.redirect("/");
    if(req.body.message == "") {
        let message = "Message text box requires a message to be posted.";
        message = encodeURIComponent(message)
        console.log(message);
        res.redirect(`/new/error/${message}`);
    } else {
        model.create_message(req.body.message).then((value) => {
            res.redirect('/');
        });
    }
}


function edit_message(req, res) {

}

function edit_message_error(req, res) {

}

function edit_message_post(req, res) {

}

module.exports = {
    init: (app) => {
        // Handle roughts
        // View All
        app.get('/', index);
        // New 
        app.get('/new', new_message);
        app.post('/new', new_message_post);
        app.get('/new/error/:message', new_message_error);
        // Edit

        // Delete
    }
};