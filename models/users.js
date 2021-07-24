var bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.BIGINT,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        },
        last_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        },
        msisdn: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        group_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            defaultValue: "1"
        },
        last_login: {
            type: DataTypes.STRING(255),
            allowNull: true,
            unique: false,
            defaultValue: "NULL"
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: false,
        },
        status: {
            type: DataTypes.ENUM('0', '1'),
            allowNull: false,
            unique: false,
            defaultValue: '1'
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
        tableName: 'users',
        hooks: {
            beforeCreate: (users) => {
                const salt = bcrypt.genSaltSync();
                users.salt = salt;
                users.password = bcrypt.hashSync(users.password, salt);
            },
            beforeUpdate: (users) => {
                if (users.password) {
                    const salt = bcrypt.genSaltSync();
                    users.salt = salt;
                    users.password = bcrypt.hashSync(users.password, salt);
                }
            },
        }
    });


    users.prototype.validPassword = async function (password) {
        return await bcrypt.compare(password, this.password);
    }
    return users;
}