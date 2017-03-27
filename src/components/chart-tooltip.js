import React, { PropTypes } from 'react';
const { shape, string, number } = PropTypes;

// TODO: remove default coords
const Tooltip = ({ data = {}, x = '100px', y = '100px' }) => {
  const { imgSrc, weight, bfPercentage } = data;
  return(
    <div className="tooltip-container" style={{ left: x, top: y }}>
      <h2>2-23-2017</h2>
      <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfgNPEy0cT1s57P6NfM8rbTKjJO1npRiNq8Fisz8PzHTDsd5SSCwUpjqX3" />
      <div className="measurements">
        <p><span>Weight: </span>{'165'}lb</p>
        <p><span>BodyFat Percentage: </span>{'14.5'}%</p>
      </div>
    </div>
  )
};

Tooltip.PropTypes = {
  data: shape({
    weight: number,
    bfPercentage: number,
    imgSrc: string
  }),
  x: number,
  y: number
};

export default Tooltip;
