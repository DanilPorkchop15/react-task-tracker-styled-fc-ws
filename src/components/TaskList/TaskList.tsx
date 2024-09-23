import React from "react";
import { ITask } from "../../types/Task.types";
import Task from "../Task/Task";
import "./TaskList.css";
import styled from "styled-components";

interface ITaskListProps {
  tasks: ITask[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const StyledTaskList = styled.div`
  margin-top: 20px;
`

const TaskList: React.FC<ITaskListProps> = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="task-list fl-col">
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
    </div>
  );
};

export default TaskList;

