import React from 'react';
import { connect } from 'react-redux';
import { toggleTooltipVisiblity as toggle, setTooltipCoords as setCoords } from '../actions/chart';

// const { shape, number, bool, func } = PropTypes;

const propTypes = {};

const defaultProps = {};

const DashBoard = () =>
  (
    <div>
      DASHBORAD
    </div>
  );

const mapState = () => ({});
  // const { chart } = state;
  // tooltipCoords: chart.get('tooltipCoords'),

export const mapDispatch = dispatch => ({
  toggleTooltipVisiblity: value => dispatch(toggle(value)),
  setTooltipCoords: coords => dispatch(setCoords(coords))
});

DashBoard.propTypes = propTypes;
DashBoard.defaultProps = defaultProps;

export default connect(mapState, mapDispatch)(DashBoard);
