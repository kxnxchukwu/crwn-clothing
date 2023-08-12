import { ReactElement } from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./notfound.styles";
import { Link } from "react-router-dom";

export interface NotFoundProps {
  message?: string;
}

export default function NotFound({ message }: NotFoundProps): ReactElement {
  return (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl={"https://i.imgur.com/qIufhof.png"} />
      <ErrorImageText>
        {" "}
        {message ? (
          message
        ) : (
          <>
            Caution! This Page is Not Found, <Link to="/">Go Home</Link>
          </>
        )}
      </ErrorImageText>
    </ErrorImageOverlay>
  );
}
