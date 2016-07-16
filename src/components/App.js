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
  }

  calcBMI(h, w) {
    const result = w / ((h / 100)*(h / 100))
    return Math.floor(result * 10) / 10;
  }

  handleChange({height, weight}) {
    console.log(this.props)
    this.props.inputDataChange({bmiValue: this.calcBMI(height, weight)})
  }

  render() {
    console.log(this.props)
    return (
      <BmiCalc
        onChange={this.handleChange.bind(this)}
        bmiValue={this.props.bmiValue} />
    );
  }
}
