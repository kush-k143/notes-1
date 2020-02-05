import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NoteColumn from './NoteColumn';
import NoteList from './NoteList';


export default class SearchBar extends Component  {
   render() {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-5 text-center">
             <Link to="/addnote">
              <ButtonContainer>
                 <span >
                  <i className="fa fa-plus"/>
                 </span>  
              </ButtonContainer>
             </Link> 
            <input className="search-control" type="text" placeholder="Search for note by title..." >
            </input>
            <Link to="/searchnote">
              <ButtonContainer>
                 <span >
                  <i className="fa fa-search"/>
                 </span>  
              </ButtonContainer>
           </Link>
           <NoteColumn/>  
           <NoteList/>   
            </div>
        </div>
       
    )
}
}

const ButtonContainer = styled.button`
  font-size: 1.1rem;
  background: transparent;
  
    border: 1px  blue;
    background-color: var(--lightBlue) !important;
    height:41px;
    width:40px;
    cursor:pointer;
    transition:all 0.5s ease-in-out;
 
 :hover {
    background-color: blue;
    color:white;
 }

`;