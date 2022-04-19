import { createGlobalStyle } from 'styled-components';

import { fit, nogap } from './mixins';

const GlobalStyle = createGlobalStyle`
  html, body, .root {
    ${fit};
    ${nogap};
  }
  
  .fit {
    ${fit};
  }
  
  .nogap {
    ${nogap};
  }
`;

export default GlobalStyle;
