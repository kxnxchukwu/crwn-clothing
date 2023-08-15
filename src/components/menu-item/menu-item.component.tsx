import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menu-item.styles";

export interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
  id: number;
}

export default function MenuItem({
  title,
  imageUrl,
  size,
  linkUrl,
}: MenuItemProps): ReactElement {
  const navigate = useNavigate();
  return (
    <MenuItemContainer size={size} onClick={() => navigate(`${linkUrl}`)}>
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
}
