import React from 'react';
import { connect } from 'react-redux';
import { getLine,updateLine } from '../actions';



 class UpdateLine extends React.Component{
    state={
        line:'',
        id:''
    }
componentDidMount=()=>{
    console.log('update',this.props.match.params.id)
    this.props.getLine(this.props.match.params.id).then(()=>this.setState({
        line:this.props.line.line,
        id:this.props.line.id
    }))
}
handleChanges=(e)=>{
this.setState({
    [e.target.name]:e.target.value
})
}
handleSubmit=(e)=>{
    e.preventDefault();
    this.props.updateLine(this.state.line,this.state.id)
    this.props.history.push('/timeline')
}


    render(){
        return (
            <div>
            <div className ="timeline-container">
                
                <div className="header-container">
                    
                    <h1 className="timeline-title">One Line a Day</h1>
                    </div>
                    
            </div>
            <form className="timeline-inputs" onSubmit={this.handleSubmit}>
            <h2 className="add-title">Update Your Line!</h2>
                <textarea
                value={this.state.line}
                name="line"
                type="text"
                onChange ={this.handleChanges}
                className="text-input"
                >
                </textarea>
                
                <button type="submit">Submit Changes</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
line:state.userReducer.line
}
)

export default connect(mapStateToProps,{getLine,updateLine})(UpdateLine)
