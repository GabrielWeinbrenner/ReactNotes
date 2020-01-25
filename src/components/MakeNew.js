import React from 'react';

class MakeNew extends React.Component{
    constructor(props){
        super(props);
        this.state={
            titleVal: "",
            noteVal: "",
            authorVal: ""
        }
    }
    handleSubmit = () => {
        const un = this.state;
        this.props.onNewNote(un.titleVal,un.noteVal,un.authorVal)
    }
    handleTitleChange = (event) =>{
        this.setState({
            titleVal: event.target.value
        })
    }
    handleNoteChange = (e) =>{
        this.setState({
            noteVal: e.target.value
        })
    }
    handleAuthorChange = (e) =>{
        this.setState({
            authorVal: e.target.value
        })
    }
    render(){
        return(
            <div id="createNew">
                <h1>Create New Note</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input type="text" value={this.state.titleVal} onChange={this.handleTitleChange}></input>
                    </label>
                    <label>
                        Note:
                        <input type="text" value={this.state.noteVal} onChange={this.handleNoteChange}></input>
                    </label>
                    <label>
                        Author:
                        <input type="text" value={this.state.authorVal} onChange={this.handleAuthorChange}></input>
                    </label>
                    <input type="submit" className="btn btn-success"value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default MakeNew;