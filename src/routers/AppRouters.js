import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Layout from '../hoc/Layout';
import Home from '../components/home/Home';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <Layout>
        <div>
            <Switch>
               <PrivateRoute path="/dashboard" component={DashboardPage} />
               <Route exact component={Home} path="/"/>
                <Route component={NotFoundPage} />
               
            </Switch>
        </div>
    </Layout>
</Router>
);

export default AppRouter;