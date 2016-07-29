import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BmiCalc from './BmiCalc'
import Ribbon from "./Ribbon"

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  calcBMI(h, w) {
    const result = w / ((h / 100)*(h / 100))
    return Math.floor(result * 10) / 10;
  }

  handleChange({height, weight}) {
    this.props.inputDataChange({bmiValue: this.calcBMI(height, weight)})
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Ribbon url="https://github.com/uehaj/react-redux-bmi" />
          <BmiCalc
            onChange={::this.handleChange}
            bmiValue={this.props.bmiValue} />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  bmiValue: React.PropTypes.number.isRequired,
  inputDataChange: React.PropTypes.func.isRequired,
}

