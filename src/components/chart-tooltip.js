import React, { PropTypes } from 'react';

const { shape, string, number } = PropTypes;

const propTypes = {
  data: shape({
    weight: number,
    bfPercentage: number,
    imgSrc: string
  }),
  left: number.isRequired,
  top: number.isRequired
};

const defaultProps = {
  data: {}
};

// TODO: remove default coords
const Tooltip = ({ data = {}, left, top }) => {
  const {
    imgSrc = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfgNPEy0cT1s57P6NfM8rbTKjJO1npRiNq8Fisz8PzHTDsd5SSCwUpjqX3',
    weight = 165,
    bfPercentage = 14.5
  } = data;

  return (
    <div className="tooltip-container" style={{ left, top }}>
      <h2>2-23-2017</h2>
      <img src={imgSrc} alt="progress-pic" />
      <div className="measurements">
        <p><span>Weight: </span>{weight}lb</p>
        <p><span>BodyFat Percentage: </span>{bfPercentage}%</p>
      </div>
    </div>
  );
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
