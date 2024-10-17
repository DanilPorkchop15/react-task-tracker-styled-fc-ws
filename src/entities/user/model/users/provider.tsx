import React from "react";
import {ErrorBoundary} from "react-error-boundary";
import {useAsync} from "react-use";

import {usersService} from "./service";
import {Loader} from "../../../../shared/ui";

export const UsersProvider = React.memo(function UsersProvider({
                                                                  children,
                                                                }: {
  children: React.ReactNode;
}) {

  const {loading} = useAsync(async () => {
    await usersService.loadUsers.bind(usersService)();
  }, []);

  if (loading) return <Loader/>;

  return <ErrorBoundary fallback={<p>Something went wrong</p>}>{children}</ErrorBoundary>;
});