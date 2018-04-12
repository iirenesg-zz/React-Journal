import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addEntry } from './actions/entries';
import { setTextFilter } from './actions/filters';
import getVisibleEntries from './selectors/entries';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const state = store.getState();
const visibleEntries = getVisibleEntries(state.entries, state.filters);
console.log(visibleEntries);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
