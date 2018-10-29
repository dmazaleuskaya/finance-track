import * as React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import {Dashboard} from '../Modules/Dashboard';
import {Finance} from '../Modules/Finance';

export class MainRoutes extends React.Component {
    public render(): React.ReactNode {
        return (
            <Router>
                <section>
                    <Route path='/' exact={true} component={Dashboard} />
                    <Route path='/finance' exact={true} component={Finance} />
                </section>
            </Router>
        )
    }
}