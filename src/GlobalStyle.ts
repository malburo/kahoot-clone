import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .ant-layout-sider-children {
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export default GlobalStyle;
