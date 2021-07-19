import React from "react";
import { withRouter } from "react-router-dom";
import "../../style/css/session_forms.css";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoUser = this.demoUser.bind(this);
    this.insertDemoUser = this.insertDemoUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/");
    }
    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  demoUser(e) {
    e.preventDefault();
      const demoAccount = ({
      email: 'demo@email.com',
      username: 'demo',
      password: 'password'
    });
    this.props.login(demoAccount)
  }

  insertDemoUser() {
    return (
      <div className="demo-login">
        <h2 className="title-text">Log in as demo</h2>
        <button className="demo-button" onClick={this.demoUser}></button>
      </div>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <div className="session-form">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                autoComplete="email"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                autoComplete="current-password"
              />
            <br/>
            <input className='demo-button' type="submit" value="Submit" />
            <button className='demo-button' onClick={this.demoUser}>Demo Login</button>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
