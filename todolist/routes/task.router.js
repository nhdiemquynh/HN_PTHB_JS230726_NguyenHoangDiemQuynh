"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var task_controller_1 = require("../controllers/task.controller");
var taskRouter = (0, express_1.Router)();
taskRouter.get('/', task_controller_1.getAllTasksController);
taskRouter.get('/:id', task_controller_1.getTaskByIdController);
taskRouter.post('/', task_controller_1.addTaskController);
taskRouter.put('/:id', task_controller_1.updateTaskController);
taskRouter.delete('/:id', task_controller_1.deleteTaskController);
exports.default = taskRouter;
