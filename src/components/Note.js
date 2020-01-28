import React from 'react';
import { FaCheck, FaTimesCircle, FaTrashAlt} from "react-icons/fa";


class Note extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            note: this.props.note,
            author: this.props.author,
            onEdit: false,
            componentShow: true
        }
    }
    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleNoteChange = (e) => {
        this.setState({
            note: e.target.value
        })
    }
    handleAuthorChange = (e) => {
        this.setState({
            author: e.target.value
        })
    }
    handleCancel = (e) =>{
        this.setState({
            onEdit: false,
            title: this.state.pastState.title,
            note: this.state.pastState.note,
            author: this.state.pastState.author
        })
    }

    handleSubmit = (e) => {
        this.setState({
            onEdit: false
        });
    }

    handleTrash = (e) => {
        this.setState({
            componentShow: false
        })
    }

    
    render(){
        if(this.state.componentShow){
            if(this.state.onEdit === false){
                return(
                    <div id="note" onClick={() => this.setState({onEdit: true, pastState: this.state})}> 
                        <h1>{this.state.title}</h1>
                        <p>{this.state.note}</p>
                        <p>{this.state.author}</p>
                    </div>
                )
            }else{
                return(
                    <div id="note">
                        <form onSubmit={this.handleSubmit}>
                            <input id="titleInput"
                                    type="text" 
                                    value={this.state.title} 
                                    onChange={this.handleTitleChange}></input>
                            <br />
                            <textarea type="text" value={this.state.note} onChange={this.handleNoteChange}></textarea>
                            <br />
                            <input type="text" value={this.state.author} onChange={this.handleAuthorChange}></input>
                            <br />
                            <button className="btn btn-danger" onClick={this.handleTrash}><FaTrashAlt /></button>
                            <button type="submit" className="btn btn-success" value="Submit"><FaCheck/></button>
                            <button value="Cancel" className="btn btn-warning" onClick={this.handleCancel}><FaTimesCircle/></button>
                        </form>
                    </div>)
            }
        }else{
            return null;
        }

    }
}

export default Note;