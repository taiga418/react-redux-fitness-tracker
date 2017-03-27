import React, { Component, PropTypes } from 'react'
import ProgressChart from '../components/progress-chart'
import { connect } from 'react-redux'
import { toggleTooltipVisiblity, setTooltipCoords } from '../actions/chart'

const { shape, string, number, bool } = PropTypes;

const propTypes = {
}

export class DashBoard extends Component {
  render() {
    const { toggleTooltipVisiblity, setTooltipCoords, tooltipCoords, tooltipVisible  } = this.props
    return (
      <ProgressChart { ...{
          toggleTooltipVisiblity,
          setTooltipCoords,
          tooltipCoords,
          tooltipVisible
        }}/>
    )
  }
}

const mapState = state => {
  const { chart } = state
  return {
    tooltipCoords: chart.get('tooltipCoords'),
    tooltipVisible: chart.get('tooltipVisible')
  }
}

export const mapDispatch = dispatch => ({
  toggleTooltipVisiblity: value => dispatch(toggleTooltipVisiblity(value)),
  setTooltipCoords: coords => dispatch(setTooltipCoords(coords))
});

DashBoard.propTypes = propTypes;

export default connect(mapState, mapDispatch)(DashBoard);
