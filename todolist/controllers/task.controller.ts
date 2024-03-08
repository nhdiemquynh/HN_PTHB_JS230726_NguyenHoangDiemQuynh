// controllers/task.controller.ts
import { Request, Response } from 'express';
import {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} from '../services/task.service';

export const getAllTasksController = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getTaskByIdController = async (req: Request, res: Response) => {
  try {
    const task = await getTaskById(parseInt(req.params.id));
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.status(200).json(task);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const addTaskController = async (req: Request, res: Response) => {
  try {
    const { name, status } = req.body;
    const newTask = await addTask(name, status);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateTaskController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, status, isDone } = req.body;
    const updatedTask = await updateTask(parseInt(id), name, status);
    if (updatedTask) {
      res.status(200).json({ message: 'Task updated successfully' });
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteTaskController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; const deletedTask = await deleteTask(parseInt(id));
    if (deletedTask === 1) {
      res.status(200).json({ message: 'Task deleted successfully' });
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};