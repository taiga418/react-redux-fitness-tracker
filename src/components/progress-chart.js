import 'c3/c3.css';
import React, { PropTypes } from 'react';
import Tooltip from './chart-tooltip';
import C3 from './c3';

const { shape, number, bool, func } = PropTypes;
const propTypes = {
  tooltipCoords: shape({
    x: number,
    y: number
  }).isRequired,
  tooltipVisible: bool,
  toggleTooltipVisiblity: func.isRequired,
  setTooltipCoords: func.isRequired
};

const defaultProps = {
  tooltipVisible: false
};
// Convenience functions

// Take the chart point and generate top/left coordinates for the tooltip
const getTooltipCoords = (index) => {
  const bar = document.querySelector(`.c3-circle-${index}`);
  const { left, top, width } = bar.getBoundingClientRect();
  return {
    left: left + width,
    top
  };
};

// C3 chart that renders measureables in a graph
const ProgressChart = ({
  /* chartData,*/
  tooltipCoords,
  tooltipVisible,
  toggleTooltipVisiblity,
  setTooltipCoords
}) => {
  const chartConfig = {
    data: {
      x: 'x',
      columns: [
        ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 340, 200, 500, 250, 350]
      ],
      onmouseover: (data) => {
        toggleTooltipVisiblity(true);
        setTooltipCoords(getTooltipCoords(data.index));
        // TODO: throttle this function!!
      },
      onmouseout: () => {
        toggleTooltipVisiblity(false);
      }
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%Y-%m-%d' // TODO: be smarter about this, to possibly conserve space on axis
        }
      }
    },
    tooltip: {
      show: false
    }
  };

  return (
    <div className="chart-container">
      {tooltipVisible &&
        <Tooltip {...tooltipCoords} />
      }
      <C3 {...{ chartConfig }} />
    </div>
  );
};

ProgressChart.propTypes = propTypes;
ProgressChart.defaultProps = defaultProps;

export default ProgressChart;
