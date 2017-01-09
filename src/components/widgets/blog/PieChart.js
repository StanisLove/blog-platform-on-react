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
        type: 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
    })
  }

  componentWillUnmount() {
    this.chart.destroy()
  }

  componentWillReceiveProps() {
    this.chart.load({
      columns: this.props.columns
    })
  }

  render() {
    return (
      <div ref="pieChart" />
    )
  }
}

export default PieChart;
