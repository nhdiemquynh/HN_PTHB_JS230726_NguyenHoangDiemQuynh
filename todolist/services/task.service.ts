// services/task.service.ts
import Task from '../models/task.model';

export const getAllTasks = async () => {
  return Task.findAll();
};

export const getTaskById = async (id: number) => {
  return Task.findByPk(id);
};

export const addTask = async (name: string, status: boolean) => {
  return Task.create({ name, status });
};

export const updateTask = async (id: number, name: string, status: boolean) => {
  return Task.update(
    { name, status },
    { where: { id }, individualHooks: true }
  );
};

export const deleteTask = async (id: number) => {
  return Task.destroy({ where: { id } });
};