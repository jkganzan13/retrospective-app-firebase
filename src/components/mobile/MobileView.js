import React, { Component, PropTypes } from 'react';
import MediaQuery from 'react-responsive';
import PresentationMode from '../presentation/PresentationMode';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { FloatingActionButton } from 'material-ui';
import { modalTypes, reviewTypes } from '../../constants'

class MobileView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: reviewTypes.START
    };
    this.setActiveTab = this.setActiveTab.bind(this);
    this.onFloatingBtnClick = this.onFloatingBtnClick.bind(this);
  }

  setActiveTab(tabValue) {
    this.setState({
      activeTab: tabValue
    });
  }

  onFloatingBtnClick() {
    const { showModal, updateKeyToEdit } = this.props.actions;
    updateKeyToEdit('');
    showModal(modalTypes.REVIEW, this.state.activeTab);
  }

  render() {
    return (
      <MediaQuery maxWidth={535}>
        <PresentationMode
          {...this.props}
          bottom={true}
          onTabChange={this.setActiveTab}
        />
        <FloatingActionButton
          className='floating-btn'
          secondary={true}
          onTouchTap={this.onFloatingBtnClick}
        >
          <ContentAdd />
        </FloatingActionButton>
      </MediaQuery>
    );
  }
}

MobileView.propTypes = {
  actions: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
  sessionDetails: PropTypes.object.isRequired,
  bottom: PropTypes.bool
};

export default MobileView;
