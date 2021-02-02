//import React from 'react';
import { FC } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import Header from './Components/Header/Header'
import './App.less';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import { Footer } from 'antd/lib/layout/layout';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
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
