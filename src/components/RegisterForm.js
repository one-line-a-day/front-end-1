import React from 'react';
import { Link } from 'react-router-dom';

import './components.css'
import { connect } from 'react-redux';
import { addUser } from '../actions';



class RegisterForm extends React.Component {
    state ={
        id:'',
        username:'',
        email:'',
        password:'',
        name:'',
    }

    handleChanges=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    addUser =(e)=>{
        e.preventDefault();
        const newUser={
          username:this.state.username,
          password:this.state.password,
          email:this.state.email
        }
        this.props.addUser(newUser).then(()=>this.props.history.push('/timeline'));
       
    }


    render() {
        
    return (
      <div className="register-page">
      <h1 className="title">One Line A Day</h1>
    <div className="form-container">
     <h2 className="register-here">Register Here!</h2>
     
      <form className="input-fields" onSubmit ={this.addUser}> 
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
          placeholder="Email"
          onChange={this.handleChanges}
          />
        
        <button type='submit'>Register</button>
        
        
        
        <Link className='link' to="/login">
          Already have an Account? Login here.
          </Link> 
        
      </form>
      
      </div>
      </div>
    )
  }
}

 export default connect(null,{addUser})(RegisterForm);