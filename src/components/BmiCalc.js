import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Row, Col } from 'react-flexbox-grid';

import NumberField from './NumberField';

export default class BmiCalc extends React.Component {
  handleChange() {
    const height = parseInt(this.height.value);
    const weight = parseInt(this.weight.value);
    this.props.onChange({ height, weight });
  }

  render() {
    return (
      <>
        <AppBar position="static">BMI</AppBar>
        <Grid>
          <Row style={{ padding: '1em' }}>
            <Col>
              <NumberField
                inputRef={el => (this.height = el)}
                label="身長を入力してください"
                onChange={this.handleChange.bind(this)}
              />
            </Col>
            <Col>
              <NumberField
                inputRef={el => (this.weight = el)}
                label="体重を入力してください"
                onChange={el => this.handleChange(el)}
              />
            </Col>
          </Row>
          <Row style={{ padding: '1em' }}>
            {this.props.bmiValue ? (
              <h1>あなたのBMIは{this.props.bmiValue}です</h1>
            ) : (
              <h1>身長と体重を入力してください</h1>
            )}
          </Row>
        </Grid>
      </>
    );
  }
}

BmiCalc.propTypes = {
  onChange: PropTypes.func.isRequired,
  bmiValue: PropTypes.number.isRequired,
};
