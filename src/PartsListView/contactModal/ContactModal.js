/**
 * Created by alanw on 12.01.2017.
 */
import React from 'react'
import {Modal, Button} from 'react-bootstrap'

export default React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    console.debug(this.props)

    return (
      <div>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Informacje kontaktowe
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Informacje kontaktowe użytkownika: {this.props.user ? this.props.user.address : 'blah'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Imię:</h2>
            <h2>Adres:</h2>
            <h2>E-mail:</h2>
            <h2>Telefon:</h2>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Zamknij</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});