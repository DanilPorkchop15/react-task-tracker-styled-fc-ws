import {Task} from "../../interfaces";
import {makeAutoObservable} from "mobx";
import {Model} from "../../../../shared/model";

export class TasksModel extends Model<Task[]> {}

export class TaskDetailsModel {}