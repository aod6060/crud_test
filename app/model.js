/*
    This is were all of the models will be placed in.
*/
const Sequalize = require('sequelize')

module.exports = {
    init: (conf) => {
        this.seq = new Sequalize('sqlite:example.db');
    },
    close: (conf) => {
        this.seq.close()
    }
};