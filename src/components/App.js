import React from 'react';
import Note from './Note';
import MakeNew from './MakeNew';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: [],
            showNewNoteEdit: false
        }
    }

    newNote = () => {
        this.setState({
            showNewNoteEdit: true
        });

    }
    handleNewNote = (title,note,author) => {
        console.log("out");
        this.setState({
            showNewNoteEdit: false,
            notes: [ {
                title: title,
                note: note,
                author: author
            }, ...this.state.notes]
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.newNote}>Make New Note</button>
                {this.state.showNewNoteEdit ? <MakeNew onNewNote={this.handleNewNote}/> : null}
                <Note title="My first Note" note="Hello world" author="Gabriel Weinbrenner" />
                {this.state.notes.map((note, index) => (
                    <Note title={note.title} note={note.note} author={note.author} />
                ))}
            </div>
        )
    }
}

export default App;