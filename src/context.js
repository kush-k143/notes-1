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

  

    formSubmitHandler  = () => {
    
        const formData = {};
        for (let formElementId in this.state.formControls) {
            formData[formElementId] = this.state.formControls[formElementId].value;
        }
        
            console.dir(formData);
  
    }
    
    
      changeHandler = event => {
        const title = event.target.title;
        const value = event.target.value;
  
        const updatedControls = {
          ...this.state.formControls
        };
        const updatedFormElement = {
          ...updatedControls[title]
        };
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
  
        updatedControls[title] = updatedFormElement;
  
        this.setState({
          formControls: updatedControls,
         
        });
    }
  

    render() {
        return (
            <NoteContext.Provider value={{
               ...this.state,
               formSubmitHandler : this.formSubmitHandler,
               changeHandler : this.changeHandler

             
             
            }}>
                {this.props.children}
            </NoteContext.Provider>
        )
    }
}


const NoteConsumer = NoteContext.Consumer

export { NoteProvider , NoteConsumer };