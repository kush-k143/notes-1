import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class AddNote extends Component { 
       
    render() {
        const { item , handleChange , handleSubmit} = this.props
         return (
            <div className="white-box">
               <form onSubmit={handleSubmit}>
                  <div className="form-group py-4 px-4">
                    <span className="fa-text">
                        <i  className="fa fa-file-text-o "/>
                    </span>
                    <span className="note-text">
                        New Note
                    </span>
                    <div className="px-4">
                       <label>Title</label>
                       <input type ="text"
                       className="form-control text-capitalize"
                       placeholder="add a note item"
                       value={item}
                       onChange={handleChange}
                      />
                    </div>
                    <div className="py-2 px-4">
                        <label>Content</label>
                        <input type="text"
                        className="form-control text-capitalize"
                        placeholder="add the content"
                       />
                    </div>
                    <div className="form-group px-4">
                        <label>tags</label>
                        <input type="text"
                        className="form-control text-capitalize"
                        placeholder="add a tag"
                        />
                    </div>
                  </div>  
              </form>
               
                <button className="btn-1">
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




