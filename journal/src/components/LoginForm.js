import React from 'react';
import { Link } from 'react-router-dom';
import './components.css'
import { withRouter } from 'react-router-dom'
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
      <h1 className="title">ONE-LINE-A-DAY</h1>
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
        
          <Link to="/">
          <h5>Dont have an Account? Sign up here.</h5>
          </Link>
        
      </form>
      </div>
      </div>
    )
  }
}
export default withRouter(LoginForm);
// export default connect(null,{addSmurf})(RegisterForm);