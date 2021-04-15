import React from 'react';

function Recommend(props) {
  return (
      <div>
        <h1>Recommendation Count</h1>
        <button onClick={() => props.counting("yay")}>Yay</button>
        <h1> {props.count} </h1>
        <button onClick={() => props.counting("nay")}>Nay</button>
      </div>
  );
}

export default Recommend;