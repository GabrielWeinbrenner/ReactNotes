

import React from 'react';
import Note from './Note';
import MakeNew from './MakeNew';
import { FaPlus , FaTrashRestore} from 'react-icons/fa';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: [
                {
                    title: "First Note", 
                    note: "My first note",
                    author: "John Smith"
                },
                {
                    title: "Second Note", 
                    note: "My second note",
                    author: "John Smith"
                }
            ],
            showNewNoteEdit: false
        }
    }
    handleNewNote = (title,note,author) => {
        console.log("out");
        this.setState({
            showNewNoteEdit: false,
            notes: [ ...this.state.notes, {
                title: title,
                note: note,
                author: author
            }]
        })
    }

    newNote = () => {
        this.setState({
            showNewNoteEdit: true
        });

    }

    handleDelete = () => {
        this.setState({
            notes: []
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <button onClick={this.newNote} className="btn btn-info">
                            <FaPlus/>  Create Note
                        </button>
                        <button onClick={this.handleDelete} className="btn btn-danger"
                            ><FaTrashRestore/>  Delete All
                        </button>

                        {this.state.showNewNoteEdit ? <MakeNew onNewNote={this.handleNewNote}/> : null}
                    </div>
                    <div className="col-sm">
                        {this.state.notes.map((note, index) => (
                            <Note title={note.title} note={note.note} author={note.author} key={index}/>
                        ))}
                    </div>
                </div>

            </div>
        )
    }
}

export default App;