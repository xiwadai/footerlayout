import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../Home';

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </div>
);
