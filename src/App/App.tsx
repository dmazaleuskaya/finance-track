import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navigation} from '../shell/navigation';
import {Finance} from '../Modules/Finance';
import {Main} from '../Modules/Main';
import styles from './App.module.css';

interface IAppProps {}

interface IRoute {
    title: string;
    path: string;
    component: React.ReactNode;
}

interface IAppState {
    routes: IRoute[];
}

class App extends React.Component<IAppProps, IAppState> {
    public state = {
        routes: [
            {title: 'finance', path: '/finance', component: Finance},
            {title: 'home', path: '/', component: Main}
        ]
    };

    public render() {
        const {routes} = this.state;
        return (
            <Router>
                <Switch>
                    <section className={styles.pageWrapper}>
                        <Navigation routes={routes} />
                        <div className={styles.contentArea}>
                            <Route path="/" exact component={Main} />
                            <Route path="/finance" component={Finance} />
                        </div>
                    </section>
                </Switch>
            </Router>
        );
    }
}

export default App;
