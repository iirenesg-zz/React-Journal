import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import DashboardPage from '../containers/DashboardPage';
import FavoritesPage from '../containers/FavoritesPage';
import ImportantPage from '../containers/ImportantPage';
import AddEntryPage from '../containers/AddEntryPage';
import EditEntryPage from '../containers/EditEntryPage';
import NotFoundPage from '../containers/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="main-content">
        <Switch>
          <Route path="/" component={DashboardPage} exact={true} />
          <Route path="/favorites" component={FavoritesPage} />
          <Route path="/important" component={ImportantPage} />
          <Route path="/add" component={AddEntryPage} />
          <Route path="/edit/:id" component={EditEntryPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
