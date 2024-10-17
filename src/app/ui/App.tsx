import React, { Component } from "react";

import TaskTracker from "../../components/TaskTracker/TaskTracker";
import { GlobalStyles } from "./GlobalStyles";
import { AppStyled } from "./AppStyled";
import {TasksProvider} from "../../entities/task";
import {UsersProvider} from "../../entities/user";

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <AppStyled>
          <TasksProvider>
            <UsersProvider>
              <TaskTracker/>
            </UsersProvider>
          </TasksProvider>
        </AppStyled>
      </>
    );
  }
}

