
import React from 'react';


const TitleInput = (props) => {
    let formControl = "form-control";
  return (
    <div>
    
      <input type= "text" {...props} className={formControl} />
    
    </div>
  );
}

export default TitleInput;