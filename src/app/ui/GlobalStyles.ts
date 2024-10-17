import { createGlobalStyle } from 'styled-components';
import {theme} from "../../shared/config";

export const GlobalStyles = createGlobalStyle`
  ${theme}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Open Sans", sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

