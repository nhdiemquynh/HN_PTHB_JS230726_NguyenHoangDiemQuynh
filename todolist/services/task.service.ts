// services/task.service.ts
import Task from '../models/task.model';

export const getAllTasks = async () => {
  return Task.findAll();
};

export const getTaskById = async (id: number) => {
  return Task.findByPk(id);
};

export const addTask = async (name: string, status: boolean) => {
  let updateStatus = status ? 1 : 0;
  return Task.create({ name, updateStatus });
};

export const updateTask = async (id: number, name: string, status: boolean) => {
  let updateStatus = status ? 1 : 0;
  return Task.update(
    { name, updateStatus },
    { where: { id }, individualHooks: true }
  );
};

export const deleteTask = async (id: number) => {
  return Task.destroy({ where: { id } });
};