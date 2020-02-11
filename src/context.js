import React, { Component } from 'react'
import { detailNotes , storeNotes } from './data'
import uuid from 'uuid'



const NoteContext = React.createContext();


class NoteProvider extends Component {
    state = {
        notes : storeNotes,
        detailNotes : detailNotes,
        note : [],
        editItem : false

    }

    handleChange = ( ) => {
       console.log("hi from handleChange")
      }
    
      handleSubmit = (e) =>  {
        e.preventDefault()

          const newNote = {
            id : this.state.id,
            note : this.state.item
          }
       console.log(newNote)
    const updatedNotes = [...this.state.notes , newNote]
          this.setState({
              notes : updatedNotes , 
              note : '',
              id : uuid(),
              editItem : false
          })    
      }
  
    render() {
        return (
            <NoteContext.Provider value={{
               ...this.state,
               handleChange : this.handleChange,
               handleSubmit : this.handleSubmit
            }}>
                {this.props.children}
            </NoteContext.Provider>
        )
    }
}


const NoteConsumer = NoteContext.Consumer

export { NoteProvider , NoteConsumer };