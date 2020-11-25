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
import CovidPage from '../pages/CovidPage';
import FAQPage from '../pages/FAQ';


const Main = () => (
    <Router>
        <ThemeProvider theme={theme}>
            <NavBar />
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/covid' component={CovidPage} exact />
                <Route path='/faq' component={FAQPage} exact />
            </Switch>
            <Footer />
        </ThemeProvider>
    </Router>
);

export default Main;