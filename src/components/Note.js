import React, { Component } from 'react'

import PropTypes from 'prop-types'

export default class Note extends Component {
    render() {
        const {id , title , info , date} = this.props.note;
        return (
              <div className="container-fluid text-center d-none d-lg-block">
            <div className="row my-4">
            <div className="col-10 mx-auto col-lg-2">
                    <p>
                       
                        <span className="mx-2 text-success">
                            <i className="fa fa-pencil"/>
                        </span>
                    
                        <span className="mx-2 text-danger">
                            <i className="fa fa-trash-o"/>
                        </span>
                    </p>
                   
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-capitalise">{title}</p>
                   
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-capitalise">{info}</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-capitalise">{date}</p>
                </div>
               </div>

        </div>
        )
    }
}

Note.propTypes = {
    note : PropTypes.shape({
        id : PropTypes.number,
        title : PropTypes.string,
        info : PropTypes.string,
        date : PropTypes.string

    }).isRequired
}

