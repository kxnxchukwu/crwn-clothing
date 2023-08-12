import { ReactElement } from "react";
import "./ThemeToggler.styles.scss";

export interface ThemeTogglerProps {
  themeToggler: () => void;
}

export default function ThemeToggler({
  themeToggler,
}: ThemeTogglerProps): ReactElement {
  return (
    <>
      {" "}
      <input
        onClick={() => themeToggler()}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <span className="ball"></span>
      </label>
    </>
  );
}
