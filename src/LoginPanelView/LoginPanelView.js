/**
 * Created by rafalmiler on 12.01.17.
 */
import React from 'react'
import {Button, Modal, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  isLogged: state.isLoggedData.isLogged
})

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const logForm = (
  <form>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Login"
      placeholder="Wpisz login"
    />
    <FieldGroup
      id="formControlsPassword"
      label="Hasło"
      type="password"
    />
    <Button type="submit">
      Zaloguj
    </Button>
  </form>
);

class LoginPanelView extends React.Component {
  constructor() {
    super()

    this.state = ({
      show: false
    })
  }

  render() {
    let close = () => this.setState({ show: false});

    return (
      <div className="modal-container">
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true})}
        >
          Zaloguj się
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Panel logowania</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {logForm}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginPanelView)