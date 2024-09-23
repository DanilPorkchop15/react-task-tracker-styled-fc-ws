import React, { Component } from "react";
import "./App.css";
import TaskTracker from "./components/TaskTracker/TaskTracker";
import styled from "styled-components";
import { FlexCenterStyled, FlexColStyled } from "./components/utils";

const AppStyled = styled.div`
  ${FlexColStyled}
  ${FlexCenterStyled}
  min-height: 100vh;
  max-width: 1176px;
  padding-inline: 20px;
  margin-inline: auto;
  font-family: "Lato", sans-serif;
`;

class App extends Component {
  render() {
    return (
      <AppStyled>
        <TaskTracker />
      </AppStyled>
    );
  }
}

export default App;
