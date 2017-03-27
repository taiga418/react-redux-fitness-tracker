import React, { PropTypes } from 'react';
import Tooltip from './chart-tooltip';
import C3 from 'react-c3js'
import 'c3/c3.css';

const { shape, string, number, bool } = PropTypes;

// Convenience functions
const getTooltipCoords = index => {
  const bar = document.querySelector(`.c3-circle-${index}`)
  const { left, right, top, bottom, width } = bar.getBoundingClientRect()
  console.log(left, right, top, bottom, width)
  return {
    x: left + width,
    y: top
  }
}

// C3 chart that renders measureables in a graph
const ProgressChart = ({ chartData, tooltipCoords, tooltipVisible, toggleTooltipVisiblity, setTooltipCoords }) => {
  const chartConfig = {
    data: {
      x: 'x',
      // xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
      columns: [
        ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
        //['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 340, 200, 500, 250, 350]
      ],
      onmouseover: data => {
        console.log('mouse over', data)
        toggleTooltipVisiblity(true)
        setTooltipCoords(getTooltipCoords(data.index))
        // TODO: show custom tooltip, but throttle this function!! Set the tooltipVisible state
        // to the id of the data point
      },
       onmouseout: () => {
         console.log('mouseout')
         toggleTooltipVisiblity(false)
       }
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%Y-%m-%d' //TODO: be smarter about this, to possibly conserve space on axis
        }
      }
    },
    tooltip: {
      show: false
    }
  }

  console.log('here', tooltipVisible)

  return (
    <div className="chart-container">
      {tooltipVisible &&
        <Tooltip {...tooltipCoords } />
      }
      <C3 {...chartConfig } />
    </div>
  )
}

ProgressChart.propTypes = {
  tooltipCoords: shape({
    x: number,
    y: number
  }),
  tooltipVisible: bool
}

export default ProgressChart
