import React, { FC, useState, useEffect } from "react";
import { ITask } from "../../types/Task.types";
import "./Task.css";
import { fetchUser } from "../../services/User.service";
import { updateTask } from "../../services/Task.service";
import TaskEdit from "../TaskEdit/TaskEdit";

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
    <div className="task fl-col j-between">
      <section className="task-section fl a-baseline j-between">
        <div className="task-block fl a-baseline">
          <span>{id}</span>
          <p>{newTitle}</p>
        </div>

        <div className="task-block fl a-baseline">
          <div className="task-block fl a-baseline">
            <span>{username ? username : "loading..."}</span>
          </div>

          <div className="task-block fl a-baseline">
            <input
              type="checkbox"
              name="completed"
              id="completed"
              onChange={handleToggle}
              checked={completed}
            />
            <div className="task-actions fl">
              <button
                className="task-edit button"
                onClick={toggleEdit}
                disabled={username === null}
              >
                {doEdit ? "Cancel" : "Edit"}
              </button>
              <button className="task-delete button" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="task-section fl a-baseline j-between">
        {doEdit && (
          <TaskEdit onEdit={handleEdit} title={title} username={username} />
        )}
      </section>
    </div>
  );
};

export default Task;
