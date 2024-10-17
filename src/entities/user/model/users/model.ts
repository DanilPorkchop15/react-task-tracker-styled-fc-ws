import {User} from "../../interfaces";
import {makeAutoObservable} from "mobx";
import {Model} from "../../../../shared/model";

export class UsersModel extends Model<User[]> {}

export class UserDetailsModel {
}