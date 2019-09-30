import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import EntryDetails from './components/entries/EntryDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateEntry from './components/entries/CreateEntry';

class App extends Component {
  render(){
    console.log('app', this.state, this.props);
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/entry/:id' component={EntryDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/create' component={CreateEntry}/>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;