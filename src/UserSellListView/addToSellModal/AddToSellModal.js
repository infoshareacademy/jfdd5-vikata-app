/**
 * Created by alanw on 12.01.2017.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Modal, Button, Glyphicon, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'
import {
  ADD_ITEM_TO_SELL
} from './actionTypes'

const mapStateToProps = state => ({
  partsTypes: state.appData.partsTypes,
  vehicleTypes: state.appData.vehicleTypes,
  partsToSell: state.partsToSellData.partsToSell
})

const mapDispatchToProps = dispatch => ({
  addItemToSell: (addItemToSell) => dispatch({type: ADD_ITEM_TO_SELL, addItemToSell: addItemToSell})
})

class AddToSellModal extends React.Component{
  constructor() {
    super()

    this.state = {
      showModal: false,
      itemToSellName: ''
    }
  }

  render() {

    let close = () => {
      this.setState({ showModal: false });
    }

    let open = () => {
      this.setState({ showModal: true });
    }


    this.handleSubmit = (event) => {
      event.preventDefault()
      this.props.addItemToSell(this.state.itemToSellName)
    }

    return (
      <div>

        <Button
          bsStyle="success"
          onClick={open}
          block
        ><Glyphicon glyph="plus"/>{' '}
          Dodaj przedmiot
        </Button>

        <Modal show={this.state.showModal} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>Wystaw przedmiot na sprzedaż</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Nazwa</ControlLabel>
                <FormControl type="text"
                             placeholder="Nazwa przedmiotu"
                             value={this.state.itemToSellName}
                             onChange={
                               event =>
                                 this.setState({
                                   itemToSellName: event.target.value
                                 })
                             }
                />
              </FormGroup>

              <FormGroup controlId="formDescSell">
                <ControlLabel>Opis</ControlLabel>
                <FormControl componentClass="textarea" placeholder="Opis przedmiotu" />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Typ części</ControlLabel>
                <FormControl componentClass="select">
                  {
                    this.props.partsTypes.map(
                      part=>
                        <option key={part.id} value={part.type.toLowerCase()}>{part.type.toLowerCase()}</option>
                    )
                  }
                </FormControl>
              </FormGroup>

              <FormGroup>
                <ControlLabel>Typ pojazdu</ControlLabel>
                <FormControl componentClass="select">
                  {
                    this.props.vehicleTypes.map(
                      type=>
                        <option key={type.name} value={type.name}>{type.name}</option>
                    )
                  }
                </FormControl>
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
            <Button onClick={close}>Zamknij</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (AddToSellModal)