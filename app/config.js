/*
    This is were all of nodes configuration will be placed in
*/
module.exports = {
    init: () => {
        this.express = require('express');
        this.app = this.express();
        this.port = 3000;
        this.bodyParser = require('body-parser');
        this.app.use(this.express.static('public'));
        this.app.use(this.bodyParser.json());
        this.app.use(this.bodyParser.urlencoded({extended: true}));
        this.app.set('view engine', 'ejs');

        // Init Models
        this.model = require('./model')
        this.model.init(this)

        // Init Controller
        this.controller = require('./controller')
        this.controller.init(this);

        this.listen_log = () => {
            console.log(`Application running on ${this.port}`)
        };

        this.on_exit = ()=> {
            this.model.close();
            console.log("Database connect is closed.");
        }
    },
    run: () => {
        this.app.listen(this.port, this.listen_log);
    },
};
