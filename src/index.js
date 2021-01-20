import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header/Header';
import Wallet from './modules/Wallet/Wallet';
import './index.scss';

function App({ year }) {
  return (
    <>
      <Header title={`Welcome to the App ${year}`} />
      <Wallet title="Wallet" subtitle="Currencies" />
    </>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App year="2021" />
  </Provider>,
  document.getElementById('root')
);
