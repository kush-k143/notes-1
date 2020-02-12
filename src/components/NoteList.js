import React , { Component } from 'react'
import { NoteConsumer } from '../context'
import Note from './Note'
import { storeNotes } from '../data'

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      notes: []
    }
  }
   render() { 
     
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
