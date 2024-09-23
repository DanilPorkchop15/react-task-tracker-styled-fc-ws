import React, { Component } from "react";

import TaskTracker from "./components/TaskTracker/TaskTracker";
import { GlobalStyles } from "./GlobalStyles";
import { AppStyled } from "./AppStyled";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <AppStyled>
          <TaskTracker />
        </AppStyled>
      </>
    );
  }
}

export default App;
