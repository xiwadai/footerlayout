import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from '../components/style/global';
import pkg from '../../package.json';
import Fastclick from '../utils/fastclick';
// import vconsole from 'vconsole';


if (__DEV__) {
    require('eruda').init();
    // new vconsole();
}

Fastclick.attach(document.body);

render(
    <React.Fragment>
        <Router basename={!__LOCAL__ ? `/${pkg.name}` : '/'}>
            <Routes />
        </Router>
        <GlobalStyle />
    </React.Fragment>,
    document.getElementById('root')
);
