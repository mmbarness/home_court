import React from 'react';
import { withRouter } from 'react-router-dom';
import AddressFormField from './address_form_field';
import '../../style/css/session_forms.css'
import '../../style/css/typeahead-combobox.css'
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      address: {
        addressObj: {
          street_address: '',
          city: '',
          state: '',
          zip_code: '',
          googleMapLink: ''
        },
        addressString: "",
        coordinates: "",
      },
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.updateAddress = this.updateAddress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }
    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateAddress({addressString, coordinates, addressObj}){
    return this.setState(() => ({address: {addressString, coordinates, addressObj}}))
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      address: this.state.address.addressString,
      lat: this.state.address.coordinates.lat.$numberDecimal,
      lng: this.state.address.coordinates.long.$numberDecimal,
    };
    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    
    console.log(this.state.address.coordinates)
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    console.log(this.state.address)

    return (
      <div className="session-form-container">
        <img src="https://home-court.s3.amazonaws.com/images/nyt-pickup-bball-2.jpeg"/>
        <form onSubmit={this.handleSubmit} id="session-form">
          <div className="session-form">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <AddressFormField updateAddress={this.updateAddress}/>
            <input className='demo-button' type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);