import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions';
import {Route} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import './App.css';




class App extends Component {

  componentDidMount(){
    this.props.getData();
      }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={RegisterForm}/>
        <Route path="/login" component={LoginForm}/>
        
      </div>
    );
  }
}

export default connect(null,{getData})(App);
