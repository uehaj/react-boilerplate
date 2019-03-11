import React from 'react';
import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import BmiCalc from '../components/BmiCalc';
import Ribbon from '../components/Ribbon';

//import setupStore from '../core/store';
import * as actions from '../core/actions';

const theme = createMuiTheme();

const calcBMI = (h, w) => {
  const result = w / ((h / 100) * (h / 100));
  return Math.floor(result * 10) / 10;
};

function App(props) {
  const handleChange = ({ height, weight }) => {
    props.inputDataChange({ bmiValue: calcBMI(height, weight) });
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Ribbon url="https://github.com/uehaj/react-redux-bmi" />
      <BmiCalc onChange={handleChange} bmiValue={props.bmiValue} />
    </MuiThemeProvider>
  );
}

function mapStateToProps(state) {
  return { bmiValue: state.bmiCalc.bmiValue };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  bmiValue: PropTypes.number.isRequired,
  inputDataChange: PropTypes.func.isRequired,
};
