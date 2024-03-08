"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// models/task.model.ts
var sequelize_1 = require("sequelize");
var sequelize = new sequelize_1.Sequelize('db_todolit_dev', 'root', '', {
    port: 3306,
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'db_todolit_dev'
});
// class Task extends Model {
//   public id!: number;
//   public name!: string;
//   public status!: boolean;
// }
var Task = sequelize.define('Task', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
    },
}, {
    modelName: 'tasks',
    timestamps: false,
});
exports.default = Task;
