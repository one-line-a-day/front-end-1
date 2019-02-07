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
        this.props.login(newLogin,this.props.history.push)
        
    }
    
    

   
    render() {
        
    return (
      <div className="register-page">
      <h1 className="title">One Line A Day</h1>
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
        
        <p className="error-msg">{this.props.error}</p>
        <button type='submit'>Login</button>
        
          <Link className="link" to="/">
          Dont have an Account? Sign up here.
          </Link>
        
      </form>
      </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>({
error:state.userReducer.error
})

 export default withRouter(connect(mapStateToProps,{login})(LoginForm));