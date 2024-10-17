import Decoder, {array, boolean, field, number, string, succeed} from "jsonous";
import {Task} from "../interfaces";

export const taskDecoder: Decoder<Task> = succeed({})
  .assign("id", field("id", number))
  .assign("title", field("title", string))
  .assign("completed", field("completed", boolean))
  .assign("userId", field("userId", number));

export const tasksDecoder: Decoder<Task[]> = array(taskDecoder)

export const createTaskDecoder: Decoder<{id: number}> = succeed({})
  .assign("id", field("id", number))