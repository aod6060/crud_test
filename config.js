/*
    This is were all of nodes configuration will be placed in
*/ 
module.exports = {
    init: () => {
        this.express = require('express')
        this.app = this.express()
        this.port = 3000;
        this.bodyParser = require('body-parser')
        this.app.use(this.express.static('public'));
        this.app.use(this.bodyParser.json());
        this.app.use(this.bodyParser.urlencoded({extended: true}));
        this.app.set('view engine', 'ejs');

        // Init Models

        // Init Controller
        // I'll add a tempory rout for testing.
        this.app.get('/', (req, res) => {
            res.send("Hello, World");
        });

        this.listen_log = () => {
            console.log(`Application running on ${this.port}`)
        };
    },
    run: () => {
        this.app.listen(this.port, this.listen_log)
    }
};
