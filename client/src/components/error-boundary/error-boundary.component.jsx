import React from 'react';
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from  "./error-boundary.styles";
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {

    constructor() {
        super();

    this.state = {
        hasErrored: false
    };
    }
    static getDerivedStateFromError(error) {
        // process the errors
        return { hasErrored: true};
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={"https://i.imgur.com/A040Lxr.png"} />
                    <ErrorImageText>This Page is Lost in Space <Link to="/">Go Home</Link></ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;