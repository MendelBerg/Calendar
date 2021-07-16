import React from 'react';
import PropTypes from "prop-types";

const TimeLine = ({ style }) => {
	return (
		<div style={style} className="time-line">
			<div className="time-line__circle"></div>
			<div className="time-line__line"></div>
		</div>
	);
};

TimeLine.propTypes = {
  style: PropTypes.object.isRequired,
};

export default TimeLine;
