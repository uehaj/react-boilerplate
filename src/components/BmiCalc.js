import React from 'react'
import AppBar from 'material-ui/AppBar';
import {Grid, Row, Col} from 'react-flexbox-grid';

import NumberField from './NumberField'

export default class BmiCalc extends React.Component {

  constructor(props) {
    super(props);
  }

  handleChange(event) {
    const height = parseInt(this.refs.height.getValue())
    const weight = parseInt(this.refs.weight.getValue())
    this.props.onChange({height, weight})
  }

  render() {
    return (
        <Grid>
          <Row style={{marginTop:'-1em'}}>
            <AppBar
              title="BMIを計算"
              iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          </Row>
          <Row style={{padding:'1em'}}>
            <Col>
              <NumberField
                  ref="height"
                  label="身長を入力してください"
                  onChange={::this.handleChange}/>
            </Col>
            <Col>
              <NumberField
                  ref="weight"
                  label="体重を入力してください"
                  onChange={::this.handleChange} />
            </Col>
          </Row>
          <Row style={{padding:'1em'}}>
            {this.props.bmiValue
             ? <h1>あなたのBMIは{this.props.bmiValue}です</h1>
             : <h1>身長と体重を入力してください</h1>}
          </Row>
        </Grid>
    );
  }
}

BmiCalc.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  bmiValue: React.PropTypes.number.isRequired,
}
