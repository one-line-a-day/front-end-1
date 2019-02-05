import React from 'react';
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
    // addUser =(e)=>{
    //     e.preventDefault();
    //     this.props.addSmurf(this.state.name,this.state.age,this.state.height);
    // }

   
    render() {
        
    return (
      //onSubmit={this.addUser}
     <>
     <div>
         <h1>Register Here!</h1>
     </div>
      <form > 
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
      </form>
      </>
    )
  }
}
export default RegisterForm;
// export default connect(null,{addSmurf})(RegisterForm);