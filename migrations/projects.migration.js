module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('projects', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT,
                autoIncrement: true,
            },
            project_id: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true,
            },
            project_name: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: false,
            },
            owner_id: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: false,
            },
            status: {
                type: Sequelize.ENUM('0', '1', '2', '3', '4', '5', '6', '7', '8', '9'),
                allowNull: false,
                unique: false,
                defaultValue: '0'
            },
            start_date: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true,
            },
            end_date: {
                type: Sequelize.STRING(255),
                allowNull: true,
                unique: false,
                defaultValue: "NULL"
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
    down: (queryInterface) => queryInterface.dropTable('projects'),
};