import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpensedDashboardPage from '../componets/ExpenseDashboardPage';
import AddExpensedPage from '../componets/AddExpensedPage';
import EditExpensePage from '../componets/EditExpensePage';
import HelpPage from '../componets/HelpPage';
import NotFoundPage from '../componets/NotFoundPage';
import Header from '../componets/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpensedDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensedPage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;