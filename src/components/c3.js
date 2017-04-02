import React, { Component, PropTypes } from 'react';
import c3 from 'c3';

const { object } = PropTypes;
const propTypes = {
  chartConfig: object.isRequired
};

// take c3 config as props and call the "generate" method
function renderChart(config) {
  const chartConfig = Object.assign({}, config, { bindto: '#chart' });
  c3.generate(chartConfig);
}

class C3 extends Component {

  componentDidMount() {
    if (this.props.chartConfig) {
      renderChart(this.props.chartConfig);
    }
  }

  shouldComponentUpdate(nextProps) {
    // only rerender the chart if the chart configs are different
    if (JSON.stringify(nextProps.chartConfig) === JSON.stringify(this.props.chartConfig)) {
      return false;
    }
    return true;
  }

  componentWillUpdate(props) {
    if (props.chartConfig) {
      renderChart(props.chartConfig);
    }
  }

  render() {
    return (
      <div id="chart"></div>
    );
  }
}

C3.propTypes = propTypes;

export default C3;
