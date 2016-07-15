import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Grid, Row, Col} from 'react-flexbox-grid';

import NumberField from './NumberField'
import BmiCalc from './BmiCalc'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bmiValue: null,
    };
  }

  calcBMI(h, w) {
    const result = w / ((h / 100)*(h / 100))
    return Math.floor(result * 10) / 10;
  }

  handleChange({height, weight}) {
    this.setState({
      bmiValue: this.calcBMI(height, weight)
    });
  }

  render() {
    return (
      <BmiCalc onChange={this.handleChange.bind(this)} bmiValue={this.state.bmiValue} />
    );
  }
}
