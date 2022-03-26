import React from 'react';
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from  "./notfound.styles";
import { Link } from 'react-router-dom';

const NotFound = () => ( 
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl={"https://i.imgur.com/qIufhof.png"} />
        <ErrorImageText>Caution! This Page is Not Found, <Link to="/">Go Home</Link> </ErrorImageText>
    </ErrorImageOverlay>
  );

export default NotFound;