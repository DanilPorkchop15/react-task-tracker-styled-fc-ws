import { FC, useState, useEffect } from "react";
import TaskEdit from "../TaskEdit/TaskEdit";
import {Button} from "../../shared/ui";
import {Task as ITask, tasksService} from "../../entities/task";
import {
  TaskActionsStyled,
  TaskBlockStyled,
  TaskSectionStyled,
  TaskStyled,
} from "./TaskStyled";
import {usersService} from "../../entities/user/model";

interface TaskProps {
  task: ITask;
}

const Task: FC<TaskProps> = ({
  task
}) => {
  const [doEdit, setDoEdit] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    usersService.getUser(task.userId)
      .then(({ username }) => setUsername(username))
      .catch((e: Error) => console.log("User fetch error " + e));
  }, [task.userId]);

  const handleToggle = () => tasksService.updateTask(task.id, {title: task.title, completed: !task.completed, userId: task.userId});
  const handleDelete = () => tasksService.deleteTask(task.id);


  const toggleEdit = () => setDoEdit(!doEdit);

  return (
    <TaskStyled>
      <TaskSectionStyled>
        <TaskBlockStyled>
          <span>{task.id}</span>
          <p>{task.title}</p>
        </TaskBlockStyled>

        <TaskBlockStyled>
          <TaskBlockStyled>
            <span>{username ? username : "loading..."}</span>
          </TaskBlockStyled>

          <TaskBlockStyled>
            <input
              type="checkbox"
              name="completed"
              id="completed"
              onChange={handleToggle}
              checked={task.completed}
            />
            <TaskActionsStyled>
              <Button onClick={toggleEdit} disabled={username === null}>
                {doEdit ? "Cancel" : "Edit"}
              </Button>
              <Button $danger onClick={handleDelete}>
                Delete
              </Button>
            </TaskActionsStyled>
          </TaskBlockStyled>
        </TaskBlockStyled>
      </TaskSectionStyled>

      <TaskSectionStyled>
        {doEdit && (
          <TaskEdit task={task} username={username} />
        )}
      </TaskSectionStyled>
    </TaskStyled>
  );
};

export default Task;
