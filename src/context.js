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

    readNote = e => {
      e.preventDefault();
      console.log(e.target);
      const title = e.currentTarget.firstElementChild.innerHTML;
      const info = e.currentTarget.MiddleElementChild.innerHTML;
      const tag = e.currentTarget.lastElementChild.innerHTML;
      this.setState({ writingNote: false, currentRead: { title: title, info : info, tag : tag} }); 
    }; 
    
      handleClick = () => {
        const newTitle = document.getElementById("new-note-title").value;
        const newContent = document.getElementById("new-note-content").value;
        const newTag = document.getElementById("new-tag-content").value;
        // const newObject = { title: newTitle, note: newContent, tag : newTag};
        console.log(newTitle,newContent,newTag,"trial")
      
        // this.setState({
        //   storedNotes: [...this.state.storedNotes, newObject]
        // });
      };
  
      writeNote = () => {
        this.setState({writingNote: true})
      }
    render() {
        return (
            <NoteContext.Provider value={{
               ...this.state,
               handleClick : this.handleClick,
               readnote : this.readNote,
               writeNote : this.writeNote
            }}>
                {this.props.children}
            </NoteContext.Provider>
        )
    }
}


const NoteConsumer = NoteContext.Consumer

export { NoteProvider , NoteConsumer };