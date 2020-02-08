import React, { Component } from 'react'
import { detailNotes , storeNotes } from './data'



const NoteContext = React.createContext();


class NoteProvider extends Component {
    state = {
        notes : storeNotes,
        detailNotes : detailNotes,
        note : [],
        editItem : false

    }

    handleChange(event) {
        const note = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [note]: value
        })
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState(this.initialState);
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