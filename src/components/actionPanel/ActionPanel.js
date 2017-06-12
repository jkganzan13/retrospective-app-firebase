import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import ActionPanelForm from './ActionPanelForm';
import { errorMsg } from '../../constants';
import ActionCards from './ActionCards';

const renderDrawerBody = (props) => {
  return (
    <div className="action-block__body">
      <div className="action-block__form-container">
        <h4 className="action-block__header">Action Points</h4>
        <ActionPanelForm
          actions={props.actions}
          sessionDetails={props.sessionDetails}
          reviews={props.reviews}
        />
      </div>
      <Divider />
      <ActionCards
        selectedReview={props.reviews.selectedReview}
        sessionId={props.sessionDetails.sessionId}
      />
    </div>
  );
};

const renderEmpty = () => (
  <div className="action-block__error">
    <span>{errorMsg.NO_SELECTED_REVIEW}</span>
  </div>
);

const ActionPanel = (props) => (
  <Drawer
    width={300}
    openSecondary={true}
    open={props.open}
    containerClassName="action-block"
  >
    { props.reviews.selectedReview.timestamp ? renderDrawerBody(props) : renderEmpty(props) }
  </Drawer>
);

ActionPanel.propTypes = {
  open: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
};

ActionPanel.defaultProps = {
  open: false,
};

export default ActionPanel;
