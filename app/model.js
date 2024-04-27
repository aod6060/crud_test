/*
    This is were all of the models will be placed in.
*/
const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize("sqlite:database.db");

// Models
const Message = sequelize.define(
    'Message',
    {
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }
);

let debug = false;

async function init_database() {
    if(debug) {
        await Message.drop();
        await Message.sync();
        await Message.destroy({truncate: true});
        let temp = await Message.create({message: "Hello, World 0"})
        await temp.save();
        temp = await Message.create({message: "Hello, World 1"});
        temp.save();
        temp = await Message.create({message: "Hello, World 2"});
        temp.save();
        temp = await Message.create({message: "Hello, World 3"});
        temp.save();
        temp = await Message.create({message: "Hello, World 4"});
        temp.save();
        temp = await Message.create({message: "Hello, World 5"});
        temp.save();
    } else {
        Message.sync();
    }
}

// This will just contain all of the models.
module.exports = {
    init: () => {
        init_database();
    },
    view_all_messages: async () => {
        return await Message.findAll();
    },
    view_message_by_id: async(id) => {
        return await Message.findByPk(id);
    },
    create_message: async (message) => {
        let temp = await Message.create({message: message});
        return await temp.save();
    },
    update_message: async (id, message) => {
        let temp = await Message.findByPk(id);
        await temp.update({message: message});
        return await temp.save();
    },
    delete_message: async (id) => {
        let temp = await Message.findByPk(id);
        return await temp.destroy();
    }
};