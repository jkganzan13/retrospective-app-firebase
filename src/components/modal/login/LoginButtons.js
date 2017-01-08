import React from 'react';
import { CircularProgress, RaisedButton } from 'material-ui';

import cssmodules from 'react-css-modules';
import styles from './loginbuttons.cssmodule.sass';

const LoginButtons = ({ showProgress, createOnClick }) => {
    return (
      <div style={{ marginTop: '14px', height:'36px' }}>
        <RaisedButton type="submit" label="Join" primary={true} style={{verticalAlign: 'top'}} disabled={showProgress} />
        <RaisedButton type="button" label="Create" primary={true} style={{verticalAlign: 'top', marginLeft: '16px'}} disabled={showProgress} onTouchTap={createOnClick} />
        { showProgress && <CircularProgress size={36} style={{ marginLeft: '16px', verticalAlign:'middle' }} /> }
      </div>
    );
};

LoginButtons.displayName = 'ModalLoginLoginButtons';
LoginButtons.propTypes = {};
LoginButtons.defaultProps = {};

export default LoginButtons;
