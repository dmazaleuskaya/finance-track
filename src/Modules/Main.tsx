import * as React from 'react';
import {Link} from 'react-router-dom';

export class Main extends React.Component {
    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <h1>Home page</h1>
                <Link to='/finance'>Go to finince</Link>
            </React.Fragment>
        )
    }
}
