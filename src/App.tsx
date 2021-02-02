import logo from './logo.svg';
import './App.less';
import { Button } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
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
