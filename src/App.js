import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from './actions';
import { getLines } from './actions';
import {Route} from 'react-router-dom';


import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Timeline from './components/Timeline';
import UpdateLine from './components/UpdateLine';
import './App.css';




class App extends Component {


  
  componentDidMount(){
    // this.props.getUsers();
      }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={RegisterForm}/>
        <Route path="/login" component={LoginForm}/>
        <Route path="/timeline" component={Timeline}/>
        <Route path="/updateline/:id" component={UpdateLine}/>
      </div>
    );
  }
}

export default connect(null,{getUsers,getLines})(App);
