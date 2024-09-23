import { createRef, FormEvent, useEffect, useState } from "react";
import { TaskEditFormStyled, TaskLabelStyled, TaskUserSelectStyled }  from "./TaskEditStyled";
import InputStyled from "../ui/InputStyled";
import ButtonStyled from "../ui/ButtonStyled";

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
    <TaskEditFormStyled onSubmit={handleEdit}>
        <TaskLabelStyled htmlFor="newTitle">
          New title
          <InputStyled
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
