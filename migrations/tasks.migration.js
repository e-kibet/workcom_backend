module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.createTable('tasks', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT,
                autoIncrement: true,
            },
            task_id: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: true,
            },
            task_name: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: false,
            },
            project_id: {
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
            tags: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: false,
            },
            start_date: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: false,
            },
            due_date: {
                type: Sequelize.STRING(255),
                allowNull: true,
                unique: false,
            },
            duration: {
                type: Sequelize.STRING(255),
                allowNull: false,
                unique: false,
            },
            priority: {
                type: Sequelize.ENUM('None', 'Low', 'Medium', 'High'),
                allowNull: false,
                unique: false,
                defaultValue: 'None'
            },
            created_by: {
                type: Sequelize.STRING(255),
                allowNull: true,
                unique: false,
            },
            completion_date: {
                type: Sequelize.STRING(255),
                allowNull: true,
                unique: false,
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
    down: (queryInterface) => queryInterface.dropTable('tasks'),
};