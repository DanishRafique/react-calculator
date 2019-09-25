import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './component/Dashboard';
import store from './store';

const css = require('./main.scss');

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}