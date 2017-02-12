import React from 'react';

import ReactDOM from 'react-dom';

import c3 from 'c3';
import 'c3/c3.css';

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.pieChart),
      data: {
        columns: this.props.columns,
        type: 'pie'
      }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentDidUpdate() {
    this.chart.load({
      columns: this.props.columns
    });
  }

  render() {
    return (
      <div ref="pieChart" />
    );
  }
}

PieChart.propTypes = {
  columns: React.PropTypes.array
};

export default PieChart;
