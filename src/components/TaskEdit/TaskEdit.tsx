import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { TaskEditFormStyled, TaskEditInputStyled, TaskLabelStyled, TaskUserSelectStyled }  from "./TaskEditStyled";
import {Button} from "../../shared/ui";
import {Task, tasksService} from "../../entities/task";

interface TaskEditProps {
  task: Task;
  username: string | null;
}

const TaskEdit: FC<TaskEditProps> = ({
  task,
  username,
}) => {
  const [userId, setUserId] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = task.title;
    }
  }, []); // eslint-disable-line

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = inputRef.current;
    if (!inputElement) {
      return;
    }
    const newTitle = inputElement.value;
    await tasksService.updateTask(task.id, { title: newTitle, userId, completed: task.completed });
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
        <Button type="submit">
          Edit
        </Button>
      </TaskEditFormStyled>
  )
}

export default TaskEdit;
