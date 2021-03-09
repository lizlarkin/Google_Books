import './App.css';
import axios from "axios";
import {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Pages/Home';
import Saved from './Pages/Saved';
import Search from './Pages/Search';
import Error from './Pages/Error';
import Nav from './Components/Nav';
import Jumbotron from './Components/Jumbotron';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Nav />
        <Jumbotron />

        <Switch>
          <Route path = "/Saved" component = {Saved} />
          <Route path = "/Search" component = {Search} />
          <Route exact path = "/" component = {Home} />
          <Route path = "/" component = {Error} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
