import React from 'react';
import Note from './Note';
import MakeNew from './MakeNew';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: []
        }
    }
    handleNewNote = (title,note,author) => {
        console.log("out");
        this.setState({
            notes: [ {
                title: title,
                note: note,
                author: author
            }, ...this.state.notes]
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                       <MakeNew onNewNote={this.handleNewNote}/>
                    </div>
                    <div className="col-sm">
                        <Note title="My first Note" note="Hello world" author="Gabriel Weinbrenner" />
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