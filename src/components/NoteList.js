import React , { Component } from 'react'
import { NoteConsumer } from '../context'
import Note from './Note'


export default class NoteList extends Component {
 
    render() {
    return (
        <React.Fragment>
              <NoteConsumer>
                {(value) => {
                  return value.notes.map( note => {
                    return < Note note = {note} key = {note.id}  />
                  })
                }}
              </NoteConsumer>
        </React.Fragment>
    )
            } 
          }

