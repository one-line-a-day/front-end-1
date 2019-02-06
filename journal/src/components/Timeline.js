import React from 'react';
import { connect } from 'react-redux'
import './components.css';


class Timeline extends React.Component{
    constructor(){
        super();
        this.state ={

        }
    }
        
    
   
    render(){
       console.log(this.props)
        return(
            <div>
                {this.props.users ? this.props.users.map(user=>{
                 return(
                 <div key={user.id}><h1>{user.username}</h1></div>
                 )
                }):null}
             
            </div>
        )
    };
}

const mapStateToProps =state =>({
    
        users: state.userReducer.users,
        lines: state.userReducer.lines
    
}
)


export default connect(mapStateToProps,{})(Timeline)