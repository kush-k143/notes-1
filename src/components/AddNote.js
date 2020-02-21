import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { detailNotes } from '../data'
import { NoteConsumer } from '../context'


export default class AddNote extends Component { 
    
    render() {
        // const { handleClick , addnote } = this.props
         return (
             
            <NoteConsumer>
                {(value)=>{
                    return(
                        <React.Fragment>
                            <div className="white-box">
                                <form onSubmit={console.log("onsubmit")}>
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
                                        onChange={value.handleTitle}
                                        />
                                        </div>
                                        <div className="py-2 px-4">
                                            <label>Content</label>
                                            <input type="text"
                                            className="form-control text-capitalize"
                                            placeholder="add the content"
                                        
                                        onChange={value.handleContent}
                                        />
                                        </div>
                                        <div className="form-group px-4">
                                            <label>tags</label>
                                            <input id="new-tag-title"
                                            type="text"
                                            className="form-control text-capitalize"
                                            placeholder="add a tag"
                                            onChange={value.handleTags}
                                            />
                                        </div>
                                    </div>  
                                </form>
                            
                                <button id="button"
                                        className="btn-1" onClick={ console.log("onclick")                                           
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
                        </React.Fragment>
                    )
                }}
            </NoteConsumer>
            
            
        )
    }
}




