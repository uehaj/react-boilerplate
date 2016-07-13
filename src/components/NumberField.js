import React from 'react';

import TextField from 'material-ui/TextField';

export default class NumberField extends React.Component {
  render() {
    return (
        <TextField
          ref={this.props.refname}
          type="number"
          floatingLabelText={this.props.label}
          onChange={this.props.onChange}
        ></TextField>
    );
  }
}
