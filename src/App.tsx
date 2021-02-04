import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.less';
import { Button, Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';

const { SubMenu } = Menu;

const App = () => {
  
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setCollapsed(!collapsed);
  }, [collapsed])

  return (
    <div className="App">
      <header className="App-header">
        <Menu>
          <Button type="primary">Button</Button>
          <Menu.Item key="1">First Menu Item</Menu.Item>
          <Menu.Item key="2">Second Menu Item</Menu.Item>
          <Menu.Item key="3">Third Menu Item</Menu.Item>
          <SubMenu key="sub1" title="Forth Menu Item">
            <Menu.ItemGroup>
              <Menu.Item key="4">Option 1</Menu.Item>
              <Menu.Item key="5">Option 2</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
        <Router>
          <div>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/resume">Resume</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </Router>

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
};

export default App;
