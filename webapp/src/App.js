import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import logo from './images/logo-32x32-white.png'
import Home from './pages/home';
import Login from './pages/login';
import CreateAccount from './pages/createAccount'
import Application from './pages/applicationForm'
import { PrivateRoute } from './components';
import UserDropdown from './components/User';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        user: {},
    };
  }

  componentDidMount() {
    this.setState({ 
        user: JSON.parse(localStorage.getItem('user')),
    });
  }

  refreshUser() {
    this.setState({ 
      user: JSON.parse(localStorage.getItem('user')),
    });
  }

  render() {
    return (
      <Router>
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">
              <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
              Baobab
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <NavLink to="/" activeClassName="nav-link active" className="nav-link">Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/applicationForm" activeClassName="nav-link active" className="nav-link">Apply</NavLink>
                </li>
              </ul>
              <UserDropdown logout={this.refreshUser}/>
            </div>
          </nav>
          <div class="Body">
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/createAccount" component={CreateAccount} />
              <PrivateRoute exact path="/applicationForm" component={Application} />
            </div>
            <div className="container">
              User: {JSON.stringify(this.state.user)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
