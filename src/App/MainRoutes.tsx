import * as React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import {Finance} from '../Modules/Finance';
import {Main} from '../Modules/Main';

export class MainRoutes extends React.Component {
    public render(): React.ReactNode {
        return (
            <Router>
                <section>
                    <Route path='/' exact={true} component={Main} />
                    <Route path='/finance' exact={true} component={Finance} />
                </section>
            </Router>
        )
    }
}