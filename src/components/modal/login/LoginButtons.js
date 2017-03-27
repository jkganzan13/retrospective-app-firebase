import React, { PropTypes } from 'react';
import { CircularProgress, FlatButton, Toolbar, ToolbarGroup, ToolbarSeparator, RaisedButton } from 'material-ui';
import { mobileWidth } from '../../../constants';
import MediaQuery from 'react-responsive';
import muiThemeable from 'material-ui/styles/muiThemeable';

const joinBtnStyle = {
  marginRight: '16px'
};

const renderDefault = (createOnClick, showProgress) => (
  <div className="login-button-container">
    <RaisedButton
      type="submit"
      label="Join"
      primary={true}
      disabled={showProgress}
      className="raised-button"
      style={joinBtnStyle}
    />
    <RaisedButton
      type="button"
      label="Create"
      primary={true}
      disabled={showProgress}
      className="raised-button"
      onTouchTap={createOnClick}
    />
    { showProgress && <CircularProgress size={30} className="circular-progress" /> }
  </div>
);

const toolbarStyle = {
  margin: '16px -24px',
  position: 'fixed',
  width: '100%',
  bottom: '60px',
  padding: 0
};

const toolbarSeparatorStyle = {
  height: '44px',
  marginTop: '5px',
  marginLeft: 0
};

const toolbarGroupStyle = {
  width:'50%'
};

const renderMobile = (createOnClick, showProgress, muiTheme) => (
  <Toolbar style={{
    ...toolbarStyle,
    backgroundColor: muiTheme.palette.primary1Color
  }}>
    <ToolbarGroup firstChild={true} style={{
      ...toolbarGroupStyle,
      marginLeft:0
    }}>
      <FlatButton
        label="Create"
        onTouchTap={createOnClick}
        style={{
          color: muiTheme.palette.alternateTextColor,
          width:'100%'
        }}
        disabled={showProgress}
        disableTouchRipple={true}
      />
    </ToolbarGroup>
    <ToolbarSeparator style={toolbarSeparatorStyle} />
    <ToolbarGroup lastChild={true} style={{
      ...toolbarGroupStyle,
      marginRight:0
    }}>
      <FlatButton
        type="submit"
        label="Join"
        style={{
          color: muiTheme.palette.alternateTextColor,
          width:'100%'
        }}
        disabled={showProgress}
        disableTouchRipple={true}
      />
    </ToolbarGroup>
  </Toolbar>
);

const LoginButtons = ({ createOnClick, showProgress, muiTheme }) => (
  <MediaQuery maxWidth={mobileWidth}>
    { (isMobile) => isMobile ? renderMobile(createOnClick, showProgress, muiTheme) : renderDefault(createOnClick, showProgress) }
  </MediaQuery>
);

LoginButtons.propTypes = {
  showProgress: PropTypes.bool.isRequired,
  createOnClick: PropTypes.func.isRequired
};

export default muiThemeable()(LoginButtons);
