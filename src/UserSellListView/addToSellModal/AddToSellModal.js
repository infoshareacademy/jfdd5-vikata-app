/**
 * Created by alanw on 12.01.2017.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Modal, Button, Glyphicon, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'
const mapStateToProps = state => ({
  partsTypes: state.appData.partsTypes,
  vehicleTypes: state.appData.vehicleTypes
})

class AddToSellModal extends React.Component{
  constructor() {
    super()

    this.state = ({
      showModal: false,
      nazwa: ''
    })
  }



  render() {

    let close = () => {
      this.setState({ showModal: false });
    }

    let open = () => {
      this.setState({ showModal: true });
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
            <form>
              <FormGroup>
                <ControlLabel>Nazwa</ControlLabel>
                <FormControl type="text"
                             placeholder="Nazwa przedmiotu"
                             onChange={
                               event =>
                                 this.setState({
                                   nazwa: event.target.value
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
                        <option value={part.type.toLowerCase()}>{part.type.toLowerCase()}</option>
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
                        <option value={type.name}>{type.name}</option>
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
});

export default connect(mapStateToProps) (AddToSellModal)