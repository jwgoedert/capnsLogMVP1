import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEntry } from '../../store/actions/entryActions';

class CreateEntry extends Component {
  state = {
    date: '',
    location: '', 
    category: '',
    content: '',
  }
  handleSubmit = (e)=> {
    e.preventDefault();
    console.log('submit', this.state);
    this.props.createEntry(this.state);
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
          <h5 className="grey-text text-darken-3">Entry Time!</h5>
          <div className="input-field">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">ditch</button>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">done</button>
          </div>
        </form>    
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return(
    {
      createEntry: (entry) => dispatch(createEntry(entry)) 
    }
  )
}

export default connect(null, mapDispatchToProps)(CreateEntry);