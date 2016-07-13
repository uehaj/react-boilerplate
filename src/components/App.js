import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import NumberField from './NumberField'

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/settings-backup-restore'; // https://design.google.com/icons/

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      height: null,
      weight: null,
      bmiValue: null,
    };
  }

  handleCalc(event) {
    this.setState({
      bmiValue: this.state.height + this.state.weight
    });
  }

  handleChangeWeight(event) {
    const weight = parseInt(event.target.value)
    this.setState({
      weight: weight
    });
  }

  handleChangeHeight(event) {
    const height = parseInt(event.target.value);
    this.setState({
      height: height
    });
  }

  render() {
    return (
        <MuiThemeProvider>
          <div>
          <AppBar
           title="BMIを計算"
           iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          <NumberField label="身長" onChange={this.handleChangeWeight.bind(this)}/><br />
          <NumberField label="体重" onChange={this.handleChangeHeight.bind(this)} /><br />
          <FlatButton onClick={this.handleCalc.bind(this)}
            label="計算する"
            labelPosition="before"
            primary={true}
            icon={<ActionAndroid />}/><br />
          <div>BMI={this.state.bmiValue}</div>
          </div>
        </MuiThemeProvider>
    );
  }
}
