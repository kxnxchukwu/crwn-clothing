import { ReactElement } from "react";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./hompage.styles";
import { Outlet } from "react-router-dom";

export default function HomePage(): ReactElement {
  return (
    <HomePageContainer>
      <Directory />
      <Outlet />
    </HomePageContainer>
  );
}
