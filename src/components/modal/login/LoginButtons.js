import React, { PropTypes } from 'react';
import { CircularProgress, RaisedButton } from 'material-ui';

const LoginButtons = ({ showProgress, createOnClick }) => {
    return (
      <div className="login-button-container">
        <RaisedButton type="submit" label="Join" primary={true} disabled={showProgress} className="raised-button" />
        <RaisedButton type="button" label="Create" primary={true} disabled={showProgress} className="raised-button" onTouchTap={createOnClick} />
        { showProgress && <CircularProgress size={30} className="circular-progress" /> }
      </div>
    );
};

LoginButtons.propTypes = {
  showProgress: PropTypes.bool.isRequired,
  createOnClick: PropTypes.func.isRequired
};

export default LoginButtons;
