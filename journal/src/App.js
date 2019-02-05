import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions';
import {Route} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import './App.css';



class App extends Component {

  componentDidMount(){
    this.props.getData();
      }

  render() {
    return (
      <div className="App">
        <Route path="/register" component={RegisterForm}/>
      </div>
    );
  }
}

export default connect(null,{getData})(App);
