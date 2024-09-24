import { FC } from "react";
import { Task as ITask } from "../../types/Task.types";
import Task from "../Task/Task";
import { TaskListStyled } from "./TaskListStyled";

interface TaskListProps {
  tasks: ITask[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, onDelete, onToggle }) => {
  return (
    <TaskListStyled>
      {tasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            userId={task.userId}
            completed={task.completed}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
    </TaskListStyled>
  );
};

export default TaskList;
