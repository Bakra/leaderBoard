import React from 'react';

import '../components/age.css'

const Age = ({handleClickAge}) => (
    <button onClick={handleClickAge} className="btn btn-primary age" name="age">Sort by Age</button>
);

export default Age;
