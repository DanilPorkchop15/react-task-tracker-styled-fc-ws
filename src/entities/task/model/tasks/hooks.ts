import { isNil } from "ramda";

import {TasksModel} from "./model";
import {tasksService} from "./service";

export function useTasks(): TasksModel {

  const tasks = tasksService.tasks;

  if (isNil(tasks)) throw new Error("tasks not found");

  return tasks;
}
