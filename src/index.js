import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import Card from './components/card/card';
import Panel from './components/panel/panel';
import './index.scss';

function App({ year }) {
  return (
    <div>
      <Header title={`Welcome to the App ${year}`} />
      <Panel>
        <Card title={`App ${year}`} subtitle="Onyx Commodities" />
      </Panel>
    </div>
  );
}

var mountNode = document.getElementById('root');
ReactDOM.render(<App year="2021" />, mountNode);
