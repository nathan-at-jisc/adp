import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import theme from './theme';

import TopBanner from '../components/TopBanner';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import HomePage from '../pages/HomePage';

const Main = () => (
    <Router>
        <ThemeProvider theme={theme}>
            <TopBanner />
            <NavBar />
            <Switch>
                <Route path='/' component={HomePage} />
            </Switch>
            <Footer />
        </ThemeProvider>
    </Router>
);

export default Main;