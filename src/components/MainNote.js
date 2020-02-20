
import React, { Component } from 'react';

import TitleInput from './TitleInput';
import InfoInput from './InfoInput';
import TagInput from './TagInput';


class App extends Component {
  

  constructor() {
    super();

    this.state = {
      formControls: {
        
        title: {
          value: '',
          placeholder: 'type your title',
          touched: false
        },
        info: {
          value: '',
          placeholder: 'type your input',
          touched: false
        },
        tag: {
          value: '',
          placeholder: 'provide a tag',
          touched: false
        },
        
      }

    }
  }

  

  render() {
    
    return (
      <div classtitle="App">
          <TitleInput title="title" 
                     placeholder={this.state.formControls.title.placeholder}
                     value={this.state.formControls.title.value}
                     onChange={this.changeHandler}
                     touched={this.state.formControls.title.touched}
                    
          />

          <InfoInput title="info"
                    placeholder={this.state.formControls.info.placeholder}
                    value={this.state.formControls.info.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.info.touched}
                  
          />

          <TagInput title="tag"
                  placeholder={this.state.formControls.tag.placeholder}
                  value={this.state.formControls.tag.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.tag.touched}
                  
          />


          <button onClick={this.formSubmitHandler} 
                
            > 
              Submit
          </button>
      </div>
    );

  }
}

export default App;
