import React from 'react';
import { connect } from 'react-redux'
import './components.css';
import { addLine,getLines } from '../actions';
import {Link} from 'react-router-dom';
import { deletePost } from '../actions';






class Timeline extends React.Component{
    
    constructor(){
        super();
        this.state ={
            line:null,
            date:null
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
        this.props.addLine(newLine).then(() => this.setState({ line: '' ,date:''}));
       
    }

    componentDidMount(){
        this.props.getLines();
          }

    deletePost=(id)=>{
        this.props.deletePost(id);
          }

    handleLogout=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        this.props.history.push('/login')
    }
   
    render(){
       
       const username=localStorage.getItem('username');
        return(
            <div className ="timeline-container">
                
                <div className="header-container">
                    
                    <h1 className="timeline-title">One Line a Day</h1>
                    
                    <div className="sub-container">
                    <p className="header-text">Welcome {username}! </p>
                    <p className="header-text" onClick={this.handleLogout}>Logout</p>
                    </div>

                </div>

                <form className="timeline-inputs" onSubmit={this.addLine}>
                <h1 className="add-title">Add New Line</h1>
                <textarea
                name="line"
                value={this.state.line}
                type="text"
                placeholder="Write a funny quote, crazy milestone, or what you ate for dinner!"
                onChange={this.handleChanges}
                className="text-input">
                </textarea> 
                <h3 className="date">Add date</h3>
                <input 
                name="date"
                value={this.state.date}
                type="text"
                placeholder="YYYY-MM-DD"
                onChange={this.handleChanges}
                className="date-input"
                />
                
                <button className="timeline-button"type='submit'>Add Line</button>
                
                </form>
                <h2 className='description'>Your Lines-Your History</h2>
               
                {this.props.lines.length > 0 && 
                    <div className='post-container'>
                        { this.props.lines.map(line=>{
                        return(
                        <div key={line.id} className="posts">
                        <div className="line-date">
                        {line.date}
                        </div>
                        <div>
                        <p className="post">{line.line}</p>
                        
                        </div>
                        <div className="update-delete">
                        <Link to={`/updateline/${line.id}`}>
                        <button className="update-btn">Update</button>
                        </Link>
                        <button className="delete-btn" onClick={()=>this.deletePost(line.id)}>Delete</button> 
                        
                        </div>
                        </div>
                        
                        )
                        })} 
                    </div>
                }

                

             
            </div>
        )
    };
}

const mapStateToProps =state =>({
    
        users: state.userReducer.users,
        lines: state.userReducer.lines,
        username: state.userReducer.username
    
}
)


export default connect(mapStateToProps,{addLine,getLines,deletePost})(Timeline)
