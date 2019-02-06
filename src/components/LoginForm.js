import React from 'react';
import { Link } from 'react-router-dom';
import './components.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { login } from '../actions';


class LoginForm extends React.Component {
    state ={
        username:'',
        password:'',
    }

    handleChanges=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    login=(e)=>{
      e.preventDefault();
        const newLogin={
          username:this.state.username,
          password:this.state.password,
          
        }
        this.props.login(newLogin);
        console.log('Login:',this.props)
    }
    
    

   
    render() {
        
    return (
      <div className="register-page">
      <h1 className="title">ONE-LINE-A-DAY</h1>
    <div className="form-container">
     <h2>Login Here!</h2>
     
      <form className="input-fields" onSubmit={this.login}> 
        <input 
        type="text"
        placeholder="Username"
        name="username"
        value={this.state.username}
        onChange={this.handleChanges}
        
        />
        

        <input
         
          value={this.state.password}
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.handleChanges}
        />
        
        
        <button type='submit'>Login</button>
        
          <Link to="/">
          <h5>Dont have an Account? Sign up here.</h5>
          </Link>
        
      </form>
      </div>
      </div>
    )
  }
}

 export default withRouter(connect(null,{login})(LoginForm));