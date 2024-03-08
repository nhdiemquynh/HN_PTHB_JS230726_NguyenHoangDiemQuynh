// models/task.model.ts
import { DataTypes, Model, Sequelize  } from 'sequelize';
const sequelize = new Sequelize(
  'db_todolit_dev',
  'root',
  '',
  {
    port: 3306,
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'db_todolit_dev'
  },
);

// class Task extends Model {
//   public id!: number;
//   public name!: string;
//   public status!: boolean;
// }

const Task = sequelize.define('Task',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    modelName: 'tasks',
    timestamps: false,
  }
);


export default Task;