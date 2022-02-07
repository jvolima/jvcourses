import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    font-size: 93.75%
  }

  @media (max-width: 720px) {
    font-size: 87.5%
  }

  body, input, select, textarea, button {
    font-size: 1rem;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`