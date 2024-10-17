import React from "react";
import {ErrorBoundary} from "react-error-boundary";
import {useAsync} from "react-use";

import {tasksService} from "./service";
import {Loader} from "../../../../shared/ui";

export const TasksProvider = React.memo(function TaskDetailsProvider({
                                                                       children,
                                                                     }: {
  children: React.ReactNode;
}) {

  const {loading} = useAsync(async () => {
    await tasksService.loadTasks.bind(tasksService)();
  }, []);

  if (loading) return <Loader/>;

  return <ErrorBoundary fallback={<p>Something went wrong</p>}>{children}</ErrorBoundary>;
});