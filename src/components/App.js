import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import NumberField from './NumberField'

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {Grid, Row, Col} from 'react-flexbox-grid';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      height: null,
      weight: null,
      bmiValue: null,
    };
  }

  calcBMI(h, w) {
    const result = w / ((h / 100)*(h / 100))
    return Math.floor(result * 10) / 10;
  }

  handleCalc(event) {
    const weight = this.state.weight;
    const height = this.state.height;
    this.setState({
      bmiValue: this.calcBMI(height, weight)
    });
  }

  handleChangeWeight(event) {
    const weight = parseInt(event.target.value)
    this.setState({
      weight: weight
    });
    this.handleCalc(event)
  }

  handleChangeHeight(event) {
    const height = parseInt(event.target.value);
    this.setState({
      height: height
    });
    this.handleCalc(event)
  }

  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row style={{marginTop:'-1em'}}>
            <AppBar
              title="BMIを計算"
              iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          </Row>
          <Row style={{padding:'1em'}}>
            <Col>
              <NumberField
                label="身長を入力してください"
                onChange={this.handleChangeHeight.bind(this)}/>
            </Col>
            <Col>
            <NumberField
                label="体重を入力してください"
                onChange={this.handleChangeWeight.bind(this)} />
            </Col>
          </Row>
          <Row style={{padding:'1em'}}>
            {this.state.bmiValue
             ? <h1>あなたのBMIは{this.state.bmiValue}です</h1>
             : <div/>}
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}
