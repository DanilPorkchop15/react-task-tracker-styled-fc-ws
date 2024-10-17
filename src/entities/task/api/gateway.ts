import {request, applyDecoder} from "../../../shared/lib";
import {CreateTaskDto, Task, UpdateTaskDto} from "../interfaces";
import {AppApiRoutes} from "../../../shared/model";
import {createTaskDecoder, taskDecoder, tasksDecoder} from "./decoders";

export class TaskApi {
  public static async getTasks(): Promise<Task[]> {
    return await request("GET", AppApiRoutes.getTasks()).then(applyDecoder(tasksDecoder))
  }

  public static async getTask(id: number): Promise<Task> {
    return await request("GET", AppApiRoutes.getTask(id)).then(applyDecoder(taskDecoder))
  }

  public static async deleteTask(id: number): Promise<void> {
    await request("DELETE", AppApiRoutes.getTask(id))
  }

  public static async createTask(task: CreateTaskDto): Promise<{ id: number }> {
    return await request("POST", AppApiRoutes.createTask(), task).then(applyDecoder(createTaskDecoder))
  }

  public static async updateTask(id: number, task: UpdateTaskDto): Promise<Task> {
    return await request("PATCH", AppApiRoutes.updateTask(id) , task).then(applyDecoder(taskDecoder))
  }
}