import React, { Component } from 'react'
import { detailNotes , storeNotes } from './data'



const NoteContext = React.createContext();


class NoteProvider extends Component {
    state = {
        title:'',
        content:'',
        notes : storeNotes,
        detailNotes : detailNotes,
        note : [],
        editItem : false

    }

<<<<<<< HEAD
    handleSubmit = e => {
      e.preventDefault();
      console.log(this.state,"submit state");
      const obj = {
          title:this.state.title,
          info:this.state.content,
          date: new Date(),
          editItem: false

      }

      const Notes = this.state.notes;
      Notes.push(obj);

      this.setState(()=>{
          return{
              notes:Notes
          }
      },()=>{
        // this.props.history.push('/');
        console.log(this.state.notes,"notes submit");
        
      })
      
      // console.log(e.target);
      // const title = e.currentTarget.firstElementChild.innerHTML;
      // const info = e.currentTarget.MiddleElementChild.innerHTML;
      // const tag = e.currentTarget.lastElementChild.innerHTML;
      // this.setState({ writingNote: false, currentRead: { title: title, info : info, tag : tag} }); 
    }; 
    
    handleTitle = (e) => {
        // console.log(e.target.value, e.target.id, "title");
        this.setState({title:e.target.value})
        //func1
    };

    handleContent = (e)=>{
        // console.log("hello from content");
        this.setState({content:e.target.value})
        //func2
    }

    handleTags = ()=>{
        console.log("hello from Tags");
        //func3
=======
  

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
>>>>>>> a4c6bada7ef0724b0f65789da323ea4c9bd5448b
    }
  

    render() {
        return (
            <NoteContext.Provider value={{
               ...this.state,
<<<<<<< HEAD
               handleTitle : this.handleTitle,
               handleContent:this.handleContent,
               handleTags: this.handleTags,
               handleSubmit:this.handleSubmit,
               writeNote : this.writeNote
=======
               formSubmitHandler : this.formSubmitHandler,
               changeHandler : this.changeHandler

             
             
>>>>>>> a4c6bada7ef0724b0f65789da323ea4c9bd5448b
            }}>
                {this.props.children}
            </NoteContext.Provider>
        )
    }
}


const NoteConsumer = NoteContext.Consumer

export { NoteProvider , NoteConsumer };