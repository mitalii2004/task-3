module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define(
        "comment",
        {
            ...require("./cors")(Sequelize, DataTypes),
            comment: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            userId: {
                type: Sequelize.UUID,
                references: {
                    model: "users",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE"
            },
        },

        {
            tableName: "comment",
        }
    );
};
