import React from "react";
import { ITask } from "../../types/Task.types";
import Task from "../Task/Task";
import styled from "styled-components";
import { FlexColStyled } from "../utils";

interface ITaskListProps {
  tasks: ITask[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TaskListStyled = styled.div`
  ${FlexColStyled}
  margin-top: 20px;
`

const TaskList: React.FC<ITaskListProps> = ({ tasks, onDelete, onToggle }) => {
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

