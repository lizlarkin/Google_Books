import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Pages/Home';
import Saved from './Pages/Saved';
import Search from './Pages/Search';
import Error from './Pages/Error';
import Nav from './Components/Nav';
import Jumbotron from './Components/Jumbotron';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {

  // LEFT ON HERE - get books from back end. Also, try to make footer work
  
  const [books, setBooks] = useState([])
    
  useEffect(async () => {
    const bookData = await  axios.get("/books");
    setBooks(bookData.data)
    console.log(books)
  }, []);

  return (
    <div className="App">
      <Router>

        <Nav />
        <Jumbotron />

        <Switch>

          <Route path = "/Saved">
            <Saved books={books} />
          </Route> 

          <Route path = "/Search" component = {Search} />
          <Route exact path = "/" component = {Home} />
          <Route path = "/" component = {Error} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
