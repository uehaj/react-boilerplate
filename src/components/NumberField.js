import React from 'react';

import TextField from 'material-ui/TextField';

export default class NumberField extends React.Component {
  getValue() {
    return this.refs.nf.input.value;
  }
  render() {
    return (
        <TextField
          ref="nf"
          type="number"
          floatingLabelText={this.props.label}
          onChange={this.props.onChange}
        ></TextField>
    );
  }
}

NumberField.propTypes = {
  onChange:  React.PropTypes.func.isRequired,
  label:     React.PropTypes.string.isRequired,
}
