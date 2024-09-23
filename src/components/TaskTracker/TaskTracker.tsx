import React, {  FC } from "react";
import TaskList from "../TaskList/TaskList";
import TaskOptions from "../TaskOptions/TaskOptions";
import { CreateTaskType, ITask } from "../../types/Task.types";
import "./TaskTracker.css";
import {
  addTask,
  deleteTask,
  fetchTasks,
  updateTask,
} from "../../services/Task.service";
import Loader from "../Loader/Loader";

interface ITaskProps {}

const TaskTracker: FC<ITaskProps> = () => {
  const [tasks, setTasks] = React.useState<ITask[]>([]);

  React.useEffect(() => {
    fetchTasks()
      .then((res: ITask[]) => {
        setTasks(res);
      })
      .catch((e: Error) => {
        alert("Ошибка получения задач!!!");
        console.log(e);
      });
  }, []);

  const handleAdd: (title: string, userId: number) => void = (
    title,
    userId
  ) => {
    const updatedTasks: ITask[] = tasks.slice();
    const newTask: CreateTaskType = {
      title,
      userId,
      completed: false,
    };
    addTask(newTask)
      .then((res: ITask) => {
        updatedTasks.unshift(res);
        setTasks(updatedTasks);
      })
      .catch((e: Error) => {
        console.log("Add task error " + e);
      });
  };

  const handleMarkAll: (value: boolean) => void = (value) => {
    const doMarkAll = window.confirm(
      `Вы уверены, что хотите отметить все задачи как ${
        value ? "" : "не"
      } выполненные?`
    );

    if (doMarkAll) {
      try {
        const updatedTasks: ITask[] = tasks.map((task) => ({
          ...task,
          completed: value,
        }));

        setTasks(updatedTasks);
        updatedTasks.forEach((task) => {
          updateTask(task).catch((e: Error) => {
            console.error(`Error updating task ${task.id}:`, e);
          });
        });
      } catch (e) {
        console.log("Mark all error " + e);
      }
    }
  };

  const handleDelete: (id: number) => void = (id) => {
    const updatedTasks: ITask[] = tasks.slice();
    const doDelete = window.confirm("Вы уверены, что хотите удалить задачу?");
    doDelete &&
      deleteTask(id)
        .then(() => {
          updatedTasks.splice(
            updatedTasks.findIndex((task) => task.id === id),
            1
          );

          setTasks(updatedTasks);
        })
        .catch((e: Error) => {
          alert("Возникла ошибка при удалении задачи!!!");
          console.log(e);
        });
  };

  const handleToggle: (id: number) => void = (id) => {
    const updatedTasks: ITask[] = tasks.slice();
    const task = updatedTasks.find((task) => task.id === id);
    if (task) {
      task.completed = !task.completed;
      updateTask(task)
        .then(() => {
          setTasks(updatedTasks);
        })
        .catch((e: Error) => {
          console.error(`Error updating task ${task.id}:`, e);
        });
    } else {
      console.error(`Task with id ${id} not found`);
    }
  };

  return (
    <div className="task-tracker fl-col a-center">
      <h1 className="task-tracker-title">Task Tracker</h1>
      <h2 className="task-tracker-title">Options</h2>
      <TaskOptions onAdd={handleAdd} onMarkEvent={handleMarkAll} />
      <h2 className="task-tracker-title">Tasks</h2>
      {tasks && tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default TaskTracker;
