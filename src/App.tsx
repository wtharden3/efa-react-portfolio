//import React from 'react';
import { FC } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.less';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Whitney's EFA Portfolio - Develop</p>
        <Button type="primary">This is an Ant Design Button</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
