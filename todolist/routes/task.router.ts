import { Router } from 'express';
import {
  getAllTasksController,
  getTaskByIdController,
  addTaskController,
  updateTaskController,
  deleteTaskController,
} from '../controllers/task.controller';

const taskRouter = Router();

taskRouter.get('/', getAllTasksController);
taskRouter.get('/:id', getTaskByIdController);
taskRouter.post('/', addTaskController);
taskRouter.put('/:id', updateTaskController);
taskRouter.delete('/:id', deleteTaskController);

export default taskRouter;