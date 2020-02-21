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
                                        <input id="title"
                                        type ="text"
                                        className="form-control text-capitalize"
                                        placeholder="add a note item"
                                        onChange={value.handleTitle} //func1
                                        />
                                        </div>
                                        <div className="py-2 px-4">
                                            <label>Content</label>
                                            <input 
                                            id="content"
                                            type="text"
                                            className="form-control text-capitalize"
                                            placeholder="add the content"
                                        
                                        onChange={value.handleContent} //func2
                                        />
                                        </div>
                                    </div>  
                                </form>
                            
                                <button id="button" className="btn-1" onClick={value.handleSubmit} >                                                                                                                         
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




