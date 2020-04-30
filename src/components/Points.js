import React from 'react';

const Points = ({handleClickPoints}) => (
  <button onClick={handleClickPoints} className="btn btn-primary points" name="points">Sort by Points</button>
);

export default Points;
