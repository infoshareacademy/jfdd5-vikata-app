/**
 * Created by rafalmiler on 12.01.17.
 */
import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  isLogged: state.isLoggedData.isLogged
})

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
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default connect(mapStateToProps)(LoginPanelView)