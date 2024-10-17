import { FC } from "react";
import TaskList from "../TaskList/TaskList";
import TaskOptions from "../TaskOptions/TaskOptions";

import { TaskTrackerStyled, TaskTrackerTitleH1, TaskTrackerTitleH2 } from "./TaskTrackerStyled";

const TaskTracker: FC = () => {
  return (
    <TaskTrackerStyled>
      <TaskTrackerTitleH1>
        Task Tracker
      </TaskTrackerTitleH1>
      <TaskTrackerTitleH2>Options</TaskTrackerTitleH2>
      <TaskOptions />
      <TaskTrackerTitleH2>Tasks</TaskTrackerTitleH2>
      <TaskList/>
    </TaskTrackerStyled>
  );
};

export default TaskTracker;

