import React from 'react';

const InfoInput = props => {

    let formControl = "form-control";

   
    return (
        <div className="form-group">
            <textarea {...props} className={formControl} />
        </div>
    );
}

export default InfoInput;