// src/server.ts
// import express = require('express');
import express from 'express';
import { Sequelize } from 'sequelize-typescript';
import taskRouter from '../routes/task.Router';

const sequelize = new Sequelize(
  'db_todolit_dev',
  'root',
  '',
  {
    port: 3306,
    dialect: 'mysql',
    host: 'localhost',
  },
);

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Optional
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Optional
  next();
});

(async () => {
  try {
    await sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.');
   }).catch((error) => {
      console.error('Unable to connect to the database: ', error);
   });

    app.use('/api/v1/tasks', taskRouter);

    app.listen(3001, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();