import * as React from 'react';
import { Navigation, IRoute } from '../shell/navigation';
import { Finance } from '../Modules/Finance';
import { Main } from '../Modules/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

interface IAppProps { }

interface IAppState {
    routes: IRoute[]
}

class App extends React.Component<IAppProps, IAppState> {
    public state = {
        routes: [
            { title: 'finance', path: '/finance', component: Finance },
            { title: 'home', path: '/', component: Main }
        ]
    }

    public render() {
        return (
            <Router>
                <Switch>
                    <section className='app'>
                        <Navigation routes={this.state.routes} />
                        <div className='app__main'>
                            <Route path='/' exact={true} component={Main} />
                            <Route path='/finance' component={Finance} />
                        </div>
                    </section>
                </Switch>
            </Router>
        );
    }
}

export default App;
