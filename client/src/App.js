import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import Navs from "./components/Navs/Navs";

import MoviesList from "./components/MoviesList/MoviesList";
import MovieDetail from "./components/MoviesList/MovieDetail";
import MovieList from "./components/Upcoming/MovieList";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Search from "./components/Search/Search";

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Navs />
      </header>

      <Switch>
        <Route
          exact
          path="/upcoming"
          component={props => <MovieList {...props} />}
        />
        <Route
          exact
          path="/landing"
          component={props => <Landing {...props} />}
        />
        <Route
          exact
          path="/register"
          component={props => <Register {...props} />}
        />
        <Route exact path="/login" component={props => <Login {...props} />} />
        <Route exact path="/" component={props => <MoviesList {...props} />} />
        <Route path="/:id" component={props => <MovieDetail {...props} />} />

        <div>
          <Route
            exact
            path="/search"
            component={props => <Search {...props} />}
          />
        </div>
      </Switch>
    </div>
  </Router>
);

export default App;
