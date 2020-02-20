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

    readNote = e => {
      e.preventDefault();
     }; 
    
    handleClick = () => {
       
        console.log("hello from context");
        
      
     
    };
  
  

    render() {
        return (
            <NoteContext.Provider value={{
               ...this.state,
             
             
            }}>
                {this.props.children}
            </NoteContext.Provider>
        )
    }
}


const NoteConsumer = NoteContext.Consumer

export { NoteProvider , NoteConsumer };