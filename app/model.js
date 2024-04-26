/*
    This is were all of the models will be placed in.
*/
const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize("sqlite:example.db");

const Message = sequelize.define(
    'Message',
    {
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
);

async function init_database() {
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
}

// This will just contain all of the models.
module.exports = {
    init: () => {
        init_database();
    },
    getAllMessages: async () => {
        return await Message.findAll();
    }
};