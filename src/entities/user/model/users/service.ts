import {UsersModel} from "./model";
import {UserApi} from "../../api";
import {User} from "../../interfaces";

export class UsersService {
  private _usersModel: UsersModel | null = null;

  public get users(): UsersModel | null {
    return this._usersModel;
  }

  public async loadUsers(): Promise<void> {
    const users = await UserApi.getUsers();
    this._usersModel = new UsersModel(users);
  }

  public async getUser(id: number): Promise<User> {
    return await UserApi.getUser(id);
  }
}
export const usersService = new UsersService()