import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;
