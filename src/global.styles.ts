import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./themes";

export type GlobalStyleProps = {
  theme: typeof lightTheme | typeof darkTheme;
};

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
body {
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  font-family: "Open Sans Condensed";
  padding: 20px 60px;
  transition: background-color 200ms ease 0s, color 300ms ease 0s;

  @media screen and (max-width: 800px) {
      padding: 10px;
  }
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;
