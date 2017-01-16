/**
 * Created by alanw on 12.01.2017.
 */
import React from 'react'
import {Modal, Button, ListGroup, ListGroupItem} from 'react-bootstrap'

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
    return (
      <div>

        <Button
          bsStyle="primary"
          onClick={this.open}
        >
          Informacje kontaktowe
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Informacje kontaktowe użytkownika {this.props.user.name+' '+this.props.user.surname}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              <ListGroupItem>
            <h3>Adres:</h3><h4>{this.props.user.address !== undefined ? this.props.user.address : 'Nie podano'}</h4>
              </ListGroupItem>
              <ListGroupItem>
            <h3>E-mail:</h3><h4>{this.props.user.email !== undefined ? this.props.user.email : 'Nie podano'}</h4>
              </ListGroupItem>
              <ListGroupItem>
            <h3>Telefon:</h3><h4>{this.props.user.phone !== undefined ? this.props.user.phone : 'Nie podano'}</h4>
              </ListGroupItem>
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Zamknij</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});