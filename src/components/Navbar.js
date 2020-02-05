import React, { Component } from 'react'


export default class Navbar extends Component {
    render() {
        return (
               <nav className="navbar navbar-dark">
                  <h1 className="text-title mx-auto col-sm-10 ">
                   <div className="logo">
                        <span className="fa fa-pencil-square-o"/>
                   </div>
                    <label >noteworx</label>
                  </h1>
               </nav>
            
        )
    }
}


