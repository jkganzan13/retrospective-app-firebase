import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './createform.cssmodule.sass';

import { Button, Form, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap'

@cssmodules(styles)
class CreateForm extends React.Component {

  render() {

    const { getNameValidationState, name, nameHandleChange, submitRoomDetails} = this.props;

    return (
      <Form horizontal onSubmit={submitRoomDetails}>
        <FormGroup validationState={getNameValidationState()} >
          <Col componentClass={ControlLabel} sm={2}>Name</Col>
          <Col sm={10}>
            <FormControl placeholder="Required" type="text" value={name} onChange={nameHandleChange} />
            <FormControl.Feedback />
          </Col>
        </FormGroup>
        <Button type="submit" bsStyle="success">Enter Room</Button>
      </Form>
    );
  }
}

CreateForm.displayName = 'ModalLoginCreateForm';
CreateForm.propTypes = {};
CreateForm.defaultProps = {};

export default CreateForm;
