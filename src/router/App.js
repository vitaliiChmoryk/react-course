import React from 'react';
import { Footer, Header, ErrorBoundary } from '../components';
import { HomePage } from '../pages';

export const App = () => {
    return (
        <ErrorBoundary>
            <Header />
            <HomePage />
            <Footer />
        </ErrorBoundary>
    );
};
