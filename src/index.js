import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Panel from './components/Panel/Panel';
import './index.scss';

function App({ year }) {
  return (
    <>
      <Header title={`Welcome to the App ${year}`} />
      <Panel>
        <Card title={`App ${year}`} subtitle="Onyx Commodities" />
      </Panel>
    </>
  );
}

var mountNode = document.getElementById('root');
ReactDOM.render(<App year="2021" />, mountNode);
