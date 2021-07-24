module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('groups', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: false,
            },
            desc: {
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
    down: (queryInterface) => queryInterface.dropTable('groups'),
};