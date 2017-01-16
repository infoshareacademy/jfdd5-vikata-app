/**
 * Created by alanw on 12.01.2017.
 */
import React from 'react'
import {Modal, Button, Glyphicon, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'

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
          bsStyle="success"
          onClick={this.open}
          block
        ><Glyphicon glyph="plus"/>{' '}
          Dodaj przedmiot
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Wystaw przedmiot na sprzedaż</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <FormGroup>
                <ControlLabel>Nazwa</ControlLabel>
                <FormControl type="text" placeholder="Nazwa przedmiotu"/>
              </FormGroup>

              <FormGroup controlId="formDescSell">
                <ControlLabel>Opis</ControlLabel>
                <FormControl componentClass="textarea" placeholder="Opis przedmiotu" />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Cena</ControlLabel>
                <FormControl type="number" />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Zdjęcie</ControlLabel>
                <FormControl type="file" />
                <HelpBlock>Dodaj zdjęcie przedstawiające twój przedmiot.</HelpBlock>
                </FormGroup>

              <Button type="submit" bsStyle="success">
                Zapisz
              </Button>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close}>Zamknij</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});