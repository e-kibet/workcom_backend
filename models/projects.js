var bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
    const projects = sequelize.define('projects', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT,
            autoIncrement: true,
        },
        project_id: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        project_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        },
        owner_id: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        },
        status: {
            type: DataTypes.ENUM('0', '1', '2', '3', '4', '5', '6', '7', '8', '9'),
            allowNull: false,
            unique: false,
            defaultValue: '0'
        },
        start_date: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        end_date: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: false,
            defaultValue: "NULL"
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        underscoredAll: true,
        tableName: 'projects'
    });
    return projects;
}