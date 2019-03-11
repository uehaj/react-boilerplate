import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

export default class NumberField extends React.Component {
  getValue() {
    return this.nf.value;
  }
  render() {
    return (
      <TextField
        inputRef={el => (this.nf = el)}
        label="Number"
        onChange={this.props.onChange}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
    );
  }
}

NumberField.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
