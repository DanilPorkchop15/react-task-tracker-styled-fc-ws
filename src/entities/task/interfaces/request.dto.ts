export interface CreateTaskDto {
  title: string;
  completed: boolean;
  userId: number;
}

export interface UpdateTaskDto extends CreateTaskDto {}