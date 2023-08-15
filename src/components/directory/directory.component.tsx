import { ReactElement } from "react";
import MenuItem, { MenuItemProps } from "../menu-item/menu-item.component";
import { useSelector } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { DirectoryContainer } from "./directory.styles";

export default function Directory(): ReactElement {
  const sections = useSelector(selectDirectorySections);
  return (
    <DirectoryContainer>
      {sections.map(({ id, ...otherSectionProps }: MenuItemProps) => (
        <MenuItem key={id} id={id} {...otherSectionProps} />
      ))}
    </DirectoryContainer>
  );
}
