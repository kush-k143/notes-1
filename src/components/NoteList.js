import React , { Component } from 'react'
import { NoteConsumer } from '../context'
import Note from './Note'
import { storeNotes } from '../data'

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      note: [],
     
    }
  }
   render() { 
    const storedNotes = [];
    this.state.storedNotes.forEach(note => {
      storedNotes.push(
        <div onClick={this.readNote} className="stored-notes" key={note.title}>
          <p id="note-title">{note.title}</p>
          <p id="note-content">{note.info}</p>
          <p id="note-tag">{note.tag}</p>
        </div>
      );
    });

    let view;

    if (this.state.writingNote) {
      view = <NoteWriter 
               handleClick={this.handleClick} />;
    } else {
      view = <NoteReading 
               currentTitle={this.state.currentRead.title} 
               currentNote={this.state.currentRead.info}
               currentTag={this.state.currentRead.tag} />;
    }
    
    return (
        <React.Fragment>
              <NoteConsumer>
                {(value) => {
                  return value.notes.map( note => {
                    return < Note key = {note.id} note = {note} />
                  })
                }}
              </NoteConsumer>
        </React.Fragment>
    )
            } 
}
