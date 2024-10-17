import {applyDecoder, request} from "../../../shared/lib";
import {AppApiRoutes} from "../../../shared/model";
import {userDecoder, usersDecoder} from "./decoders";
import {User} from "../interfaces";

export class UserApi {

  public static async getUsers(): Promise<User[]> {
    console.log(await request("GET", AppApiRoutes.getUsers()))
    return await request("GET", AppApiRoutes.getUsers()).then(r => applyDecoder(usersDecoder)(r))
  }

  public static async getUser(id: number): Promise<User> {
    return await request("GET", AppApiRoutes.getUser(id)).then(applyDecoder(userDecoder))
  }
}