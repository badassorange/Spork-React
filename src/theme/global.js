import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #f4f6f8;
  height: 100%;
}

a {
  text-decoration: none;
}

#root {
  height: 100%;
}

:not(pre) > code {
  font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;
  background-color: #eeeeee;
  padding: 2px 4px;
  direction: ltr;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  line-height: 1.5;
  font-size: 14px;
}
`;
export default GlobalStyle;
