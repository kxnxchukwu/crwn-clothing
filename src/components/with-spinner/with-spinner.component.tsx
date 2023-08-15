import React, { ReactElement, ReactNode } from "react";
import Spinner from "../spinner/spinner.component";

const WithSpinner =
  (WrappedComponent: React.ElementType) =>
  ({
    isLoading,
    ...otherProps
  }: {
    isLoading: boolean;
    otherProps: {
      [x: string]: ReactElement | ReactNode;
    };
  }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };

export default WithSpinner;
