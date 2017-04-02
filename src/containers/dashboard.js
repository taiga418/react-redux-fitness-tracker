import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleTooltipVisiblity as toggle, setTooltipCoords as setCoords } from '../actions/chart';
import ProgressChart from '../components/progress-chart';

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

const DashBoard = ({ toggleTooltipVisiblity, setTooltipCoords, tooltipCoords, tooltipVisible }) =>
  (
    <ProgressChart
      {...{
        toggleTooltipVisiblity,
        setTooltipCoords,
        tooltipCoords,
        tooltipVisible
      }}
    />
  );

const mapState = (state) => {
  const { chart } = state;
  return {
    tooltipCoords: chart.get('tooltipCoords'),
    tooltipVisible: chart.get('tooltipVisible')
  };
};

export const mapDispatch = dispatch => ({
  toggleTooltipVisiblity: value => dispatch(toggle(value)),
  setTooltipCoords: coords => dispatch(setCoords(coords))
});

DashBoard.propTypes = propTypes;
DashBoard.defaultProps = defaultProps;

export default connect(mapState, mapDispatch)(DashBoard);
