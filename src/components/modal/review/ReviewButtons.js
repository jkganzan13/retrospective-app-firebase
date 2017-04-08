import React, { PropTypes } from 'react';
import { FlatButton, IconButton, RaisedButton, Toolbar, ToolbarGroup } from 'material-ui';
import Send from 'material-ui/svg-icons/content/send';
import MediaQuery from 'react-responsive';
import { mobileWidth } from '../../../constants';
import muiThemeable from 'material-ui/styles/muiThemeable';

const submitBtnStyle = {
  marginRight: '16px'
};

const marginTop16 ={
  marginTop: '16px'
};

const renderDefault = (closeOnClick) => (
  <div style={marginTop16}>
    <RaisedButton
      type="submit"
      label="Submit"
      primary={true}
      style={submitBtnStyle}
    />
    <FlatButton
      label="Close"
      onTouchTap={closeOnClick}
    />
  </div>
);

const toolbarStyle = {
  margin: '16px -24px',
  position: 'fixed',
  width: '100%',
  bottom: '60px'
};

const renderMobile = (closeOnClick, muiTheme) => (
  <Toolbar style={{
    ...toolbarStyle,
    backgroundColor: muiTheme.palette.primary1Color
  }}>
    <ToolbarGroup firstChild={true}>
      <FlatButton
        label="Back"
        onTouchTap={closeOnClick}
        style={{
          marginLeft:0,
          color: muiTheme.palette.alternateTextColor
        }}
        disableTouchRipple={true}
      />
    </ToolbarGroup>
    <ToolbarGroup lastChild={true}>
      <IconButton
        type="submit"
        style={{marginRight:'12px'}}
        iconStyle={{color: muiTheme.palette.alternateTextColor}}
      >
        <Send />
      </IconButton>
    </ToolbarGroup>
  </Toolbar>
);

const ReviewButtons = ({ closeOnClick, muiTheme }) => (
  <MediaQuery maxWidth={mobileWidth}>
    { (isMobile) => isMobile ? renderMobile(closeOnClick, muiTheme) : renderDefault(closeOnClick) }
  </MediaQuery>
);

ReviewButtons.propTypes = {
  closeOnClick: PropTypes.func.isRequired
};

export default muiThemeable()(ReviewButtons);
