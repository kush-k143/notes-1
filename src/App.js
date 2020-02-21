import React , { Component } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch , Route } from 'react-router-dom'
import AddNote from './components/AddNote'
import Default from './components/Default'



class App extends Component {
      render() {
      return (
         <React.Fragment>
             <Navbar />
                <Switch>  
                    <Route exact path = "/" component={SearchBar} />                  
                    <Route path = "/addnote" component={AddNote} exact={true} />
                    <Route component={Default}/>
                    
                </Switch>
         </React.Fragment>

            );
        }
    }
export default App;
