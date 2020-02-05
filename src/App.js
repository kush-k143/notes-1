import React , { Component } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch , Route } from 'react-router-dom'
import AddNote from './components/AddNote'
import Default from './components/Default'
import uuid from 'uuid'


class App extends Component {
    state = {
        items : [],
        id : uuid(),
        item : '',
        editItem : false
    }

    handleChange = (e) => {
        this.setState({
            item : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

      const newItem = {
          id : this.state.id,
          title : this.state.item
      }  
      console.log(newItem)

      const updatedItems = [...this.state.items,newItem];

      this.setState({
          items : updatedItems,
         item : '', 
         id : uuid(),
         editItem : false
      })
     }

   
   render() {
      return (
         <React.Fragment>
             <Navbar />
                <Switch>
                    <Route exact path = "/" component={SearchBar} />
                    <Route path = "/addnote" component={AddNote} 
                    item={this.state.item}
                     handleChange={this.handleChange}
                     handleSubmit={this.handleSubmit}
                     />
                    <Route component={Default}/>
                </Switch>
         </React.Fragment>

            );
        }
    }
export default App;
