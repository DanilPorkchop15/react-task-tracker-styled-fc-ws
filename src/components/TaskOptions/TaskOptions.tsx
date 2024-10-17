import { ChangeEvent, FC, useState } from "react";
import {
  MarkAllButtonStyled,
  NewTaskButtonStyled,
  NewTaskInputStyled,
  TaskOptionsBlockStyled,
  TaskOptionsStyled,
  TaskOptionsUserSelectStyled,
  UnmarkAllButtonStyled,
} from "./TaskOptionsStyled";
import {tasksService} from "../../entities/task";


const TaskOptions: FC = () => {
  const [value, setValue] = useState<string>("");
  const [userId, setUserId] = useState<number | null>(null);

  const handleAdd = async () => {
    if (value.length > 0 && userId) {
      await tasksService.createTask({
        title: value,
        userId,
        completed: false
      })
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
        <MarkAllButtonStyled $success onClick={() => tasksService.markAll(true)}>
          Check all
        </MarkAllButtonStyled>
        <UnmarkAllButtonStyled $danger onClick={() => tasksService.markAll(false)}>
          Uncheck all
        </UnmarkAllButtonStyled>
      </TaskOptionsBlockStyled>
    </TaskOptionsStyled>
  );
};

export default TaskOptions;
