import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const defaultProps = {}

const Routines = () => (
  <div className="routines-container">
    <h1>Avauilable Routines</h1>
    <ul>
      <li>Shred</li>
      <li>Bulk</li>
    </ul>
    <div>Create New Routine</div>
  </div>
);


const mapState = (state) => ({})

export const mapDispatch = dispatch => ({})

Routines.propTypes = {}

Routines.defaultProps = {}

export default connect(mapState, mapDispatch)(Routines)
