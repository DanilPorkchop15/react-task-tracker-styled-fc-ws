import React, { ChangeEvent } from "react";
import "./TaskOptions.css";
import TaskUserSelect from "../TaskUserSelect/TaskUserSelect";

interface ITaskProps {
  onAdd: (value: string, userId: number) => void;
  onMarkEvent: (value: boolean) => void;
}

const TaskOptions: React.FC<ITaskProps> = ({ onAdd, onMarkEvent }) => {
  const [value, setValue] = React.useState<string>("");
  const [userId, setUserId] = React.useState<number | null>(null);

  const handleAdd = () => {
    if (value.length > 0 && userId) {
      onAdd(value, userId);
      setValue("");
    } else {
      alert("Введите текст и автора заметки!");
    }
  };

  const handleChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    setValue(e.target.value);
  };

  const handleSelect: (userId: number) => void = (userId) => {
    setUserId(userId);
  };

  return (
    <div className="task-options fl-col fl-center">
      <div className="task-options-block fl a-center j-between">
        <input
          type="text"
          className="task-input-new input"
          placeholder="Enter new task..."
          value={value}
          onChange={handleChange}
        />
        <TaskUserSelect
          onSelect={handleSelect}
          className="task-options-user-select"
        />
        <button onClick={handleAdd} className="task-button-new button" disabled={!userId || value.length === 0}>
          Add task
        </button>
      </div>

      <div className="task-options-block fl a-center">
        <button
          className="task-options-mark-all button"
          onClick={() => onMarkEvent(true)}
        >
          Check all
        </button>
        <button
          className="task-options-unmark-all button"
          onClick={() => onMarkEvent(false)}
        >
          Uncheck all
        </button>
      </div>
    </div>
  );
};

export default TaskOptions;
