import React from 'react';

const Rank = ({handleClickRank }) => (
  <button onClick={handleClickRank} className="btn btn-primary rank" name="rank">Sort by Rank</button>
);

export default Rank;
