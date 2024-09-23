import React, { FC, useState, useEffect } from "react";
import { ITask } from "../../types/Task.types";
import { fetchUser } from "../../services/User.service";
import { updateTask } from "../../services/Task.service";
import TaskEdit from "../TaskEdit/TaskEdit";
import ButtonStyled from "../ui/ButtonStyled";
import {
  TaskActionsStyled,
  TaskBlockStyled,
  TaskSectionStyled,
  TaskStyled,
} from "./TaskStyled";

interface ITaskProps extends ITask {
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const Task: FC<ITaskProps> = ({
  id,
  title,
  completed,
  userId,
  onDelete,
  onToggle,
}) => {
  const [doEdit, setDoEdit] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState(title);

  useEffect(() => {
    fetchUser(userId)
      .then(({ username }) => setUsername(username))
      .catch((e: Error) => console.log("User fetch error " + e));
  }, [userId]);

  const handleToggle = () => onToggle(id);
  const handleDelete = () => onDelete(id);
  const handleEdit = (title: string, userId: number) => {
    fetchUser(userId)
      .then(({ username }: { username: string }) => {
        updateTask({ id, title, completed, userId });
        setDoEdit(false);
        setNewTitle(title);
        setUsername(username);
      })
      .catch((e: Error) => console.log("Task edit error " + e));
  };

  const toggleEdit = () => setDoEdit(!doEdit);

  return (
    <TaskStyled>
      <TaskSectionStyled>
        <TaskBlockStyled>
          <span>{id}</span>
          <p>{newTitle}</p>
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
              checked={completed}
            />
            <TaskActionsStyled>
              <ButtonStyled onClick={toggleEdit} disabled={username === null}>
                {doEdit ? "Cancel" : "Edit"}
              </ButtonStyled>
              <ButtonStyled danger onClick={handleDelete}>
                Delete
              </ButtonStyled>
            </TaskActionsStyled>
          </TaskBlockStyled>
        </TaskBlockStyled>
      </TaskSectionStyled>

      <TaskSectionStyled>
        {doEdit && (
          <TaskEdit onEdit={handleEdit} title={title} username={username} />
        )}
      </TaskSectionStyled>
    </TaskStyled>
  );
};

export default Task;
