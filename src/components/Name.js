import React, { useState } from 'react';
import '../components/age.css'


const Name = ({handleClickName}) => {

  return (
  // <div className="column">
    <button onClick={handleClickName} className="btn btn-primary name" name="name">Sort by Name</button>
    // {/* <button onClick={setCol} className="btn btn-primary age" name="age">{ collapse ? 'Expand name' : 'Collapse name' }</button> */}
  // </div>
  )
}

export default Name;
