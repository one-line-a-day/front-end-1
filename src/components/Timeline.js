import React from 'react';
import { connect } from 'react-redux'
import './components.css';
import { addLine,getLines } from '../actions';
import {Link} from 'react-router-dom';




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
        this.props.addLine(newLine)
        console.log('timelineProps:',this.props)
    }

    componentDidMount(){
        this.props.getLines();
          }
   
    render(){
       console.log(this.props)
        return(
            <div className ="timeline-container">
                
                <div className="header-container">
                    <h1 className="timeline-title">One Line a Day</h1>
                    <div className="sub-container">
                    <p className="header-text">Welcome, {this.props.username} </p>
                    <Link to="/login">
                    <p className="header-text">logout</p>
                    </Link>
                    </div>

                </div>

                <form className="timeline-inputs" onSubmit={this.addLine}>
                <h1 className="add-title">Add new Line</h1>
                <input 
                name="line"
                value={this.state.line}
                type="text"
                placeholder="Talk About Your Day..."
                onChange={this.handleChanges}
                className="line-input"
                />
                <h3 className="date">Add Date</h3>
                <input 
                name="date"
                value={this.state.date}
                type="text"
                placeholder="YYYY-MM-DD"
                onChange={this.handleChanges}
                className="date-input"
                />
                
                <button className="timeline-button"type='submit' >Add Line</button>
                
                </form>
                <h2 className='description'>Your Lines</h2>
               <div className='post-container'>
                {this.props.lines ? this.props.lines.map(line=>{
                 return(
                 <div key={line.id} className="posts">
                 <div>
                 <p className="post">{line.line}</p>
                 </div>
                 <div className="update-delete">
                 <p className="dropdown" >Update</p>
                 <p>Delete</p>
                 </div>
                 </div>
                 
                 )
                }):null} 
                </div>

                

             
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


export default connect(mapStateToProps,{addLine,getLines})(Timeline)
