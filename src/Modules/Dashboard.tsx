import * as React from 'react';
import {Link} from 'react-router-dom';

export class Dashboard extends React.Component {
    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <h1>Dashboard page</h1>
                <Link to='/finance'>Go to finince</Link>
            </React.Fragment>
        )
    }
}
