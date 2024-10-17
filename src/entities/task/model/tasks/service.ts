import {TasksModel} from "./model";
import {TaskApi} from "../../api";
import {CreateTaskDto, Task, UpdateTaskDto} from "../../interfaces";

export class TasksService {
  private _tasksModel: TasksModel | null = null;

  public get tasks(): TasksModel | null {
    return this._tasksModel;
  }

  public async loadTasks(): Promise<void> {
    const tasks = await TaskApi.getTasks();
    this._tasksModel = new TasksModel(tasks);
  }

  public async deleteTask(id: number): Promise<void> {
    await TaskApi.deleteTask(id);
    this._tasksModel?.set(TasksService._sortTasks([...this._tasksModel.state.filter(task => task.id !== id)]));
  }

  public async createTask(task: CreateTaskDto): Promise<void> {
    const taskCreatedId = await TaskApi.createTask(task);
    this._tasksModel?.set(TasksService._sortTasks([...this._tasksModel.state, {...task, id: taskCreatedId.id}]));
  }

  public async updateTask(id: number, task: UpdateTaskDto): Promise<void> {
    await TaskApi.updateTask(id, task);
    this._tasksModel?.set(TasksService._sortTasks([...this._tasksModel.state.filter(task => task.id !== id), { ...task, id}]));
  }

  public getTaskFromList(id: number): Task | null {
    return this._tasksModel?.state.find(task => task.id === id) || null;
  }

  public async markAll(value: boolean): Promise<void> {
    const updatedTasks: Task[] = []

    this._tasksModel?.state.map(async task => {
      await TaskApi.updateTask(task.id, {title: task.title, completed: value, userId: task.userId})
      updatedTasks.push({...task, completed: value});
    });
    if (updatedTasks.length > 0) {
      this._tasksModel?.set(TasksService._sortTasks(updatedTasks));
    }
  }

  private static _sortTasks (tasks: Task[]): Task[] {
    return tasks.sort((a, b) => a.id - b.id)
  }
}

export const tasksService = new TasksService()