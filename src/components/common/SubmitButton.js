import React from 'react';
import { CircularProgress, RaisedButton } from 'material-ui';

const SubmitButton = (props) => {
  return (
    <div style={{ marginTop: '14px', height:'36px' }}>
      <RaisedButton type="submit" label={props.label} primary={props.primary} secondary={props.secondary} style={{verticalAlign: 'top'}} />
      { props.showProgress && <CircularProgress size={30} style={{ marginLeft: '16px', verticalAlign:'middle' }} /> }
    </div>
  )
};

SubmitButton.defaultProps = {
  label: "Submit",
  primary: true,
  secondary: false,
  loading: false,
  showProgress: false
};

export default SubmitButton;
