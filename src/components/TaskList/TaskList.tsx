import { FC, useState } from "react";
import { Task as ITask } from "../../types/Task.types";
import Task from "../Task/Task";
import { TaskListStyled } from "./TaskListStyled";
import Pagination from "../ui/Pagination/Pagination";

interface TaskListProps {
  tasks: ITask[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, onDelete, onToggle }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const taskPerPage: number = 10;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const indexOfLastTask = currentPage * taskPerPage;
  const indexOfFirstTask = indexOfLastTask - taskPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <TaskListStyled>
      {currentTasks &&
        currentTasks.map((task) => (
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
      <Pagination
        data={tasks}
        onPageChange={paginate}
        taskPerPage={taskPerPage}
        currentPage={currentPage}
      />
    </TaskListStyled>
  );
};

export default TaskList;
