import { isNil } from "ramda";

import {UsersModel} from "./model";
import {usersService} from "./service";

export function useUsers(): UsersModel {

  const users = usersService.users;

  if (isNil(users)) throw new Error("users not found");

  return users;
}