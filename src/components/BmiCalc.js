import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Row, Col } from 'react-flexbox-grid';

import NumberField from './NumberField';

export default function BmiCalc(props) {
  const inputHeight = useRef(null);
  const inputWeight = useRef(null);

  const handleChange = () => {
    const height = parseInt(inputHeight.current.value);
    const weight = parseInt(inputWeight.current.value);
    props.onChange({ height, weight });
  };

  return (
    <>
      <AppBar position="static">BMI</AppBar>
      <Grid>
        <Row style={{ padding: '1em' }}>
          <Col>
            <NumberField
              inputRef={inputHeight}
              label="身長を入力してください"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <NumberField
              inputRef={inputWeight}
              label="体重を入力してください"
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row style={{ padding: '1em' }}>
          {props.bmiValue ? (
            <h1>あなたのBMIは{props.bmiValue}です</h1>
          ) : (
            <h1>身長と体重を入力してください</h1>
          )}
        </Row>
      </Grid>
    </>
  );
}

BmiCalc.propTypes = {
  onChange: PropTypes.func.isRequired,
  bmiValue: PropTypes.number.isRequired,
};
