import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  handleSubmit = (e)=> {
    e.preventDefault();
    console.log('submit', this.state);
  }

  handleChange = (e)=> {
    // console.log('change', e);
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="firstName">FirstName</label>
            <input type="text" id="firstName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>    
      </div>
    )
  }
}

export default SignUp;