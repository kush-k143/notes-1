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

    constructor(props) {
      super(props);
      this.initialState = {
        id: '',
        title: '',
        info: '',
        tag: ''
      }
  
      if(props.note){
        this.state = props.note
      } else {
        this.state = this.initialState;
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const note = event.target.note;
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