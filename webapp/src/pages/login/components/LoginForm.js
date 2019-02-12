import React, { Component } from "react";
import { userService } from '../../../services/user';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

class LoginForm extends Component {
  constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: "",
        submitted: false,
        loading: false,
        error: ""
      };
    }
    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }
  
    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  
    handleSubmit = event => {
      event.preventDefault();
      this.setState({ submitted: true });
      this.setState({ loading: true });

      userService.login(this.state.email, this.state.password)
        .then(
            response => {
              console.log('Response from user service: ', response);
              if (response.user) {
                // Login was successful, redirect to refering location.
                const { from } = this.props.location.state || { from: { pathname: "/" } };
                this.props.history.push(from);
              } else {
                // Login was unsuccessful
                if (response.status == 401) {
                  //Invalid username or password
                  this.setState({
                    error: "Incorrect username or password.",
                    loading: false
                  });
                }
                else {
                  this.setState({
                    error: response.messsage,
                    loading: false
                  });
                }
              }   
            }
        );
    }
    render() {
      const { email, password, submitted, loading, error } = this.state;

      return (
        <div className="Login">
          {error &&
              <div className={'alert alert-danger'}>{error}</div>
          }
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" onChange={this.handleChange} value={this.state.email} autoFocus="true"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
            </div>
            <button type="submit" class="btn btn-primary" disabled={!this.validateForm() || loading}>Login</button>
            {loading &&
              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            }  
          </form>
          <Link to="/createAccount">Create an account</Link>
        </div>
      );
    }
  }

  export default withRouter(LoginForm)