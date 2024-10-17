import { FC, useState } from "react";
import Task from "../Task/Task";
import { TaskListStyled } from "./TaskListStyled";
import Pagination from "../../shared/ui/Pagination/Pagination";
import {tasksService} from "../../entities/task";

import { observer } from "mobx-react-lite";

const TaskList: FC = observer(() => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const taskPerPage: number = 10;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const indexOfLastTask = currentPage * taskPerPage;
  const indexOfFirstTask = indexOfLastTask - taskPerPage;
  const currentTasks = tasksService.tasks?.state.slice(indexOfFirstTask, indexOfLastTask);

  return (
    <TaskListStyled>
      {currentTasks &&
        currentTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
          />
        ))
      }
      { tasksService.tasks && <Pagination
        data={tasksService.tasks.state}
        onPageChange={paginate}
        taskPerPage={taskPerPage}
        currentPage={currentPage}
      />}
    </TaskListStyled>
  );
});

export default TaskList;
