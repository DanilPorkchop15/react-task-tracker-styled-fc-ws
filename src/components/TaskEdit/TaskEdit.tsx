import { createRef, FormEvent, useEffect, useState } from "react";
import TaskUserSelect from "../TaskUserSelect/TaskUserSelect";
import "./TaskEdit.css";

interface ITaskEditProps {
  onEdit: (title: string, userId: number) => void;
  title: string;
  username: string | null;
}

const TaskEdit: React.FC<ITaskEditProps> = ({
  onEdit,
  title,
  username,
}) => {
  const [userId, setUserId] = useState<number>(0);

  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    inputRef.current!.value = title;
  }, []); // eslint-disable-line

  const handleEdit: (e: FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    const newTitle = inputRef.current!.value;
    onEdit(newTitle, userId);
  };

  const handleSelect: (userId: number) => void = (userId: number) => {
    setUserId(userId);
  };

  return (
    <form onSubmit={handleEdit} className="task-form-edit fl-col">
        <label htmlFor="newTitle" className="task-label fl-col">
          New title
          <input
            ref={inputRef}
            type="text"
            className="task-input-edit"
            placeholder="Enter new task..."
            name="newTitle"
          />
        </label>
        <label className="task-label fl-col">
          Author
          <TaskUserSelect
            onSelect={handleSelect}
            defaultValue={username}
            className="task-edit-user-select"
          />
        </label>
        <button type="submit" className="task-button-edit">
          Edit
        </button>
      </form>
  )
}

export default TaskEdit;
