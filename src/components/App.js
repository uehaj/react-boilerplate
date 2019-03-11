import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';

import BmiCalc from './BmiCalc';
import Ribbon from './Ribbon';

const theme = createMuiTheme();

const calcBMI = (h, w) => {
  const result = w / ((h / 100) * (h / 100));
  return Math.floor(result * 10) / 10;
};

export default function App(props) {
  const handleChange = ({ height, weight }) => {
    props.inputDataChange({ bmiValue: calcBMI(height, weight) });
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Ribbon url="https://github.com/uehaj/react-redux-bmi" />
        <BmiCalc onChange={handleChange} bmiValue={props.bmiValue} />
      </div>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  bmiValue: PropTypes.number.isRequired,
  inputDataChange: PropTypes.func.isRequired,
};
