import React, {memo} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Finance} from '../Modules/Finance';
import {Main} from '../Modules/Main';

export const MainRoutes = memo(() => (
    <Router>
        <section>
            <Route path="/" exact component={Main} />
            <Route path="/finance" exact component={Finance} />
        </section>
    </Router>
));
