import React, { ChangeEvent } from "react";
import {
  MarkAllButtonStyled,
  NewTaskButtonStyled,
  NewTaskInputStyled,
  TaskOptionsBlockStyled,
  TaskOptionsStyled,
  TaskOptionsUserSelectStyled,
  UnmarkAllButtonStyled,
} from "./TaskOptionsStyled";

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
    <TaskOptionsStyled >
      <TaskOptionsBlockStyled >
        <NewTaskInputStyled
          type="text"
          placeholder="Enter new task..."
          value={value}
          onChange={handleChange}
        />
        <TaskOptionsUserSelectStyled onSelect={handleSelect} />
        <NewTaskButtonStyled
          onClick={handleAdd}
          disabled={!userId || value.length === 0}
        >
          Add task
        </NewTaskButtonStyled>
      </TaskOptionsBlockStyled>

      <TaskOptionsBlockStyled>
        <MarkAllButtonStyled success onClick={() => onMarkEvent(true)}>
          Check all
        </MarkAllButtonStyled>
        <UnmarkAllButtonStyled danger onClick={() => onMarkEvent(false)}>
          Uncheck all
        </UnmarkAllButtonStyled>
      </TaskOptionsBlockStyled>
    </TaskOptionsStyled>
  );
};

export default TaskOptions;
