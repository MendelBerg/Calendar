import React from 'react';

const TimeLine = ({ style }) => {
  return (
    <div style={style} className="timeLine">
      <div className="timeLine__circle"></div>
      <div className="timeLine__line"></div>
    </div>
  );
};

export default TimeLine;
