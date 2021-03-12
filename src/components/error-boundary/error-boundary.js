import React from 'react';
import { ErrorComponent } from '../error-component';
import PropTypes from 'prop-types';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        };
    }

    componentDidCatch(error) {
        this.setState({ error });
    }

    render() {
        if (this.state.error) {
            return <ErrorComponent />;
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};
