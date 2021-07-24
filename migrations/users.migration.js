module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT,
                autoIncrement: true,
            },
            first_name: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: false,
            },
            last_name: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: false,
            },
            msisdn: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true,
            },
            group_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: false,
                defaultValue: "1"
            },
            last_login: {
                type: Sequelize.STRING(255),
                allowNull: true,
                unique: false,
                defaultValue: "NULL"
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: false,
            },
            status: {
                type: Sequelize.ENUM('0', '1'),
                allowNull: false,
                unique: false,
                defaultValue: '1'
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
        }),
    down: (queryInterface) => queryInterface.dropTable('users'),
};