import { createGlobalStyle } from 'styled-components'
/* eslint-disable */
// @ts-ignore
const GlobalStyle = createGlobalStyle`  body { background-color: ${({ theme }) => theme.colors.background };

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
