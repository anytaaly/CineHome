import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import PrivateRoute from "./components/common/PrivateRoute";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";

import MoviesList from "./components/MoviesList/MoviesList";
import MovieDetail from "./components/MoviesList/MovieDetail";
import MovieList from "./components/Upcoming/MovieList";

import Search from "./components/Search/Search";

import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />

              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute path="/edit-profile" component={EditProfile} />
              </Switch>
              <div>
                <Switch>
                  <PrivateRoute
                    exact
                    path="/upcoming"
                    component={props => <MovieList {...props} />}
                  />
                  <PrivateRoute
                    exact
                    path="/topmovies"
                    component={props => <MoviesList {...props} />}
                  />

                  <PrivateRoute
                    exact
                    path="/:id"
                    component={props => <MovieDetail {...props} />}
                  />
                </Switch>
              </div>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

// const App extends Component {

//   <Provider store={store}>
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <Navbar />
//         </header>

//         <Switch>
//           <Route
//             exact
//             path="/login"
//             component={props => <Login {...props} />}
//           />
//           <Route
//             exact
//             path="/upcoming"
//             component={props => <MovieList {...props} />}
//           />
//           <Route
//             exact
//             path="/landing"
//             component={props => <Landing {...props} />}
//           />
//           <Route
//             exact
//             path="/register"
//             component={props => <Register {...props} />}
//           />

//           <Route
//             exact
//             path="/"
//             component={props => <MoviesList {...props} />}
//           />
//           <Route path="/:id" component={props => <MovieDetail {...props} />} />

//           <div>
//             <Route
//               exact
//               path="/search"
//               component={props => <Search {...props} />}
//             />
//           </div>
//         </Switch>
//       </div>
//     </Router>
//   </Provider>
//  }
// );

export default App;
