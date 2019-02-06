import React from 'react';
import { connect } from 'react-redux'
import './components.css';
import LoginForm from './LoginForm';
import { Route } from 'react-router-dom';
import { addLine } from '../actions';




class Timeline extends React.Component{
    constructor(){
        super();
        this.state ={
            line:'',
            date:''
        }
    }
        
    handleChanges=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    addLine =(e)=>{
        e.preventDefault();
        const newLine={
          line:this.state.line,
          date:this.state.date
        }
        this.props.addLine(newLine);
        console.log(this.props)
    }
   
    render(){
       console.log(this.props)
        return(
            <div className ="timeline-container">
                
                <div className="header-container">
                    <h1 className="timeline-title">One Line a Day</h1>
                    <div className="sub-container">
                    <p className="header-text">Welcome, username </p>
                    <p className="header-text">logout</p>
                    </div>

                </div>

                <form className="timeline-inputs" onSubmit={this.addLine}>
                <h1 className="add-title">Add new Line</h1>
                <input 
                name="line"
                value={this.state.line}
                type="text"
                placeholder="New Line"
                onChange={this.handleChanges}
                className="line-input"
                />
                <input 
                name="date"
                value={this.state.date}
                type="text"
                placeholder="Add Date"
                onChange={this.handleChanges}
                className="date-input"
                />
                
                <button className="timeline-button"type='submit' >Add Line</button>
                </form>

               <div>
                {this.props.lines ? this.props.lines.map(line=>{
                 return(
                 <div key={line.id} className="post-container"><p className="post">{line.line}</p></div>
                 
                 )
                }):null} 
                </div>

                

             
            </div>
        )
    };
}

const mapStateToProps =state =>({
    
        users: state.userReducer.users,
        lines: state.userReducer.lines
    
}
)


export default connect(mapStateToProps,{addLine})(Timeline)
