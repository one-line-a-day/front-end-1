import React from 'react';
import { NavLink } from 'react-router-dom';
import './components.css'
// import { connect } from 'react-redux';


class LoginForm extends React.Component {
    state ={
        username:'',
        password:'',
    }

    handleChanges=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    

   
    render() {
        
    return (
      <div className="register-page">
      <h1>A-Line-A-Day</h1>
    <div className="form-container">
     <h2>Login Here!</h2>
     
      <form className="input-fields"> 
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
        
          <NavLink to="/">
          <h5>Dont have an Account? Sign up here.</h5>
          </NavLink>
        
      </form>
      </div>
      </div>
    )
  }
}
export default LoginForm;
// export default connect(null,{addSmurf})(RegisterForm);