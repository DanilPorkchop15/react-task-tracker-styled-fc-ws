import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #212121;
    --secondary-color: #484848;
    --foreground-color: #424242;
    --background-color: #303030;
    --text-color: #fff;
    --danger-color: #c23232;
    --success-color: #1e911e;
    --border-color: #424242;
    --shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    --input-background-color: #424242;
    --input-border-color: #303030;
  }

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

