import React from 'react';
import { CircularProgress, RaisedButton } from 'material-ui';

import cssmodules from 'react-css-modules';
import styles from './loginbuttons.cssmodule.sass';

const LoginButtons = ({ showProgress, createOnClick }) => {
    return (
      <div className="login-button-container">
        <RaisedButton type="submit" label="Join" primary={true} disabled={showProgress} className="raised-button" />
        <RaisedButton type="button" label="Create" primary={true} disabled={showProgress} className="raised-button" onTouchTap={createOnClick} />
        { showProgress && <CircularProgress size={30} className="circular-progress" /> }
      </div>
    );
};

LoginButtons.displayName = 'ModalLoginLoginButtons';
LoginButtons.propTypes = {};
LoginButtons.defaultProps = {};

export default LoginButtons;
