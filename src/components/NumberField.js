import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

export default function NumberField(props) {
  return (
    <TextField
      inputRef={props.inputRef}
      label="Number"
      onChange={props.onChange}
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      margin="normal"
    />
  );
}

NumberField.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
