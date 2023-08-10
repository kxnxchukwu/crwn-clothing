import React from 'react';
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from  "./notfound.styles";
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

// custom hook to get the current pathname in React

const usePathname = () => {
  const location = useLocation();
  console.log(location.pathname);
}

const NotFound = () => {
    usePathname()
    return(
    <ErrorImageOverlay>
        <ErrorImageContainer imageUrl={"https://i.imgur.com/qIufhof.png"} />
        <ErrorImageText>Caution! This Page is Not Found, <Link to="/">Go Home</Link> </ErrorImageText>
    </ErrorImageOverlay>
    );
};

export default NotFound;