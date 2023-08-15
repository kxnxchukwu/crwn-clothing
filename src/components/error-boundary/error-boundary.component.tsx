import React, { ErrorInfo, ReactElement } from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error-boundary.styles";
import { Link } from "react-router-dom";

interface Props {
  children: ReactElement;
}

interface State {
  hasErrored: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError() {
    return { hasErrored: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={"https://i.imgur.com/A040Lxr.png"} />
          <ErrorImageText>
            This Page is Lost in Space <Link to="/">Go Home</Link>
          </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
