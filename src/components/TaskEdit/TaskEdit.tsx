import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { TaskEditFormStyled, TaskEditInputStyled, TaskLabelStyled, TaskUserSelectStyled }  from "./TaskEditStyled";
import ButtonStyled from "../ui/Button/ButtonStyled";

interface TaskEditProps {
  onEdit: (title: string, userId: number) => void;
  title: string;
  username: string | null;
}

const TaskEdit: FC<TaskEditProps> = ({
  onEdit,
  title,
  username,
}) => {
  const [userId, setUserId] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = title;
    }
  }, []); // eslint-disable-line

  const handleEdit: (e: FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    const inputElement = inputRef.current;
    if (!inputElement) {
      return;
    }
    const newTitle = inputElement.value;
    onEdit(newTitle, userId);
  };

  const handleSelect: (userId: number) => void = (userId: number) => {
    setUserId(userId);
  };

  return (
    <TaskEditFormStyled onSubmit={handleEdit}>
        <TaskLabelStyled htmlFor="newTitle">
          New title
          <TaskEditInputStyled
            ref={inputRef}
            type="text"
            placeholder="Enter new task..."
            name="newTitle"
          />
        </TaskLabelStyled>
        <TaskLabelStyled >
          Author
          <TaskUserSelectStyled
            onSelect={handleSelect}
            defaultValue={username}
          />
        </TaskLabelStyled>
        <ButtonStyled type="submit">
          Edit
        </ButtonStyled>
      </TaskEditFormStyled>
  )
}

export default TaskEdit;
