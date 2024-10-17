import {BASE_URL} from "../../config";

export class AppApiRoutes {
  public static readonly BASE: string = BASE_URL;

  public  static getUser(id: number): string { return `${AppApiRoutes.BASE}/users/${id}`; }

  public  static getUsers(): string { return `${AppApiRoutes.BASE}/users`; }

  public  static getTask(id: number): string { return `${AppApiRoutes.BASE}/todos/${id}`; }

  public  static getTasks(): string { return `${AppApiRoutes.BASE}/todos`; }

  public  static createTask(): string { return `${AppApiRoutes.BASE}/todos`; }

  public  static updateTask(id: number): string { return `${AppApiRoutes.BASE}/todos/${id}`; }
}