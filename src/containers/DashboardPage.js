import React from 'react';
import { NavLink } from 'react-router-dom';
import EntryList from '../components/EntryList';
import EntryListFilters from '../components/EntryListFilters';

const DashboardPage = () => (
  <div>
    <div className="main-header">
      <h1>Journal Entries</h1>
      <NavLink className="button button-small" to="/add">
        <span className="button-text">Add new</span>
        <span className="icon-small icon-new"></span>
      </NavLink>
    </div>
    <EntryListFilters />
    <EntryList />
  </div>
);

export default DashboardPage;
