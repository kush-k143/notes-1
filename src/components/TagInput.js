
import React from 'react';

const TagInput = props => {

    let formControl = "form-control";

    return (
        <div className="form-group">
            <input type="TagInput" className={formControl} {...props} />
        </div>
    );
}

export default TagInput;