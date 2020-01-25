import React from 'react';


class Note extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            note: this.props.note,
            author: this.props.author,
            onEdit: false
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

    render(){
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
                        <button type="submit" value="Submit">Submit</button>
                        <button value="Cancel" onClick={this.handleCancel}>Cancel</button>
                    </form>
                </div>
            )
        }

    }
}

export default Note;