import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";

import Navs from "./components/Navs/Navs";
import MoviesList from "./components/MoviesList/MoviesList";
import MovieDetail from "./components/MoviesList/MovieDetail";
import MovieList from "./components/Upcoming/MovieList";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Search from "./components/Search/Search";

import "./App.css";

//Check for Token
if (localStorage.jwtToken) {
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode Token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthentication
  store.dispatch(setCurrentUser(decoded));
}

const App = () => (
  <Provider store={store}>
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
          <Route
            exact
            path="/login"
            component={props => <Login {...props} />}
          />
          <Route
            exact
            path="/"
            component={props => <MoviesList {...props} />}
          />
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
  </Provider>
);

export default App;
