import React from 'react';
import { NavLink } from 'react-router-dom';
import './components.css'
// import { connect } from 'react-redux';


class RegisterForm extends React.Component {
    state ={
        username:'',
        password:'',
        email:''
    }

    handleChanges=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    

   
    render() {
        
    return (
      <div className="register-page">
      <h1>A-Line-A-Day</h1>
    <div className="form-container">
     <h2>Register Here!</h2>
     
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
        <input
          
          value={this.state.email}
          name="email"
          type="text"
          placeholder="Enter Email"
          onChange={this.handleChanges}
          />
        
        <button type='submit'>Register</button>
        
          <NavLink to="/login">
          <h5>Already have an Account? Login here.</h5>
          </NavLink>
        
      </form>
      </div>
      </div>
    )
  }
}
export default RegisterForm;
// export default connect(null,{addSmurf})(RegisterForm);