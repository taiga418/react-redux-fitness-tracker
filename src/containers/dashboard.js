/*
  purpose of this main container and child components is to allow users to record daily Workout
  content. Collect as much workout metadata as possible. Fields and field-selection will be TBD.
  Will initially limit to
    - sets x reps of exercises
    - notes
    - date/time of session
    - additional notes
  Will expand to include possibly include the following
    - hrs of sleep the night before
    - caffeine(mg) prior to working out
    - rest times between sets/exercises
*/

import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { testAction } from '../actions';

const propTypes = {
  testAction: func.isRequired
};

const defaultProps = {};

const DashBoard = () => {
  // Should be minimal, render child components here
  return (
    <div>
      DASHBORAD
    </div>
  );
};

const mapState = () => ({});
  // const { chart } = state;
  // tooltipCoords: chart.get('tooltipCoords'),

export const mapDispatch = dispatch => ({
  testAction: value => dispatch(testAction(value)),
});

DashBoard.propTypes = propTypes;
DashBoard.defaultProps = defaultProps;

export default connect(mapState, mapDispatch)(DashBoard);
