import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { detailNotes } from '../data'
import { NoteConsumer } from '../context'


export default class AddNote extends Component { 
    
    render() {
        const { handleClick , addnote } = this.props
         return (
             
            
            <div className="white-box">
               <form onSubmit={this.props.addnote}>
                  <div className="form-group py-4 px-4">
                    <span className="fa-text">
                        <i  className="fa fa-file-text-o "/>
                    </span>
                    <span className="note-text">
                        New Note
                    </span>
                    <div className="px-4">
                       <label>Title</label>
                       <input id="new-note-title"
                       type ="text"
                       className="form-control text-capitalize"
                       placeholder="add a note item"
                       onChange={this.props.handleClick}
                      />
                    </div>
                    <div className="py-2 px-4">
                        <label>Content</label>
                        <input type="text"
                        className="form-control text-capitalize"
                        placeholder="add the content"
                       
                       onChange={this.props.handleClick}
                       />
                    </div>
                    <div className="form-group px-4">
                        <label>tags</label>
                        <input id="new-tag-title"
                        type="text"
                        className="form-control text-capitalize"
                        placeholder="add a tag"
                        onChange={this.props.handleClick}
                        />
                    </div>
                  </div>  
              </form>
               
                <button id="button"
                        className="btn-1" onClick={() => 
                            addnote()
                        }>
                    <span>
                        <i  className="fa fa-save"/>
                        <span className=" px-2">
                        Save
                            </span>
                    </span>
                    </button>
               
                    <Link to="/">
                    <button className="btn-2">
                    <span>
                        <i  className="fa fa-close"/>
                        <span className=" px-2">
                        cancel
                            </span>
                    </span>
                    </button>
                    </Link>
            </div>
            
            
        )
    }
}




