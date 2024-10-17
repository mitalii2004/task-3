const Sequelize = require("sequelize");
const sequelize = require("../dbconnection").sequelize;

module.exports = {
    userModel: require("./userModel")(Sequelize, sequelize, Sequelize.DataTypes),
    commentModel: require("./commentModel")(Sequelize,sequelize,Sequelize.DataTypes)
};
