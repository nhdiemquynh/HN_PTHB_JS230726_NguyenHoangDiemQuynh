// models/task.model.ts
import { DataTypes, Model  } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'db_todolit_dev',
    // models: [__dirname + '/models'],
  });

class Task extends Model {
  public id!: number;
  public name!: string;
  public status!: boolean;
}

Task.init(
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
    sequelize,
    modelName: 'Task',
    timestamps: false,
  }
);


export default Task;