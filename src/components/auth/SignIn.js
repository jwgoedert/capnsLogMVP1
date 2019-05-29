import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email: '',
    password: ''

  }
  handleSubmit = (e)=> {
    e.preventDefault();
    console.log('submit', this.state);
  }

  handleChange = (e)=> {
    console.log('change', e);
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
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login With Google</button>
          </div>
        </form>    
      </div>
    )
  }
}

export default SignIn;