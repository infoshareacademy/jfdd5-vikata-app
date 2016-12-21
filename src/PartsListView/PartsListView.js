/**
 * Created by alanw on 15.12.2016.
 */
import React from 'react'
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'


const mapStateToProps = state => ({
  partsTypes: state.appData.partsTypes,
  parts: state.appData.parts,
  selectedType: state.appData.selectedType,
  selectedModel: state.appData.selectedModel
})

const mapDispatchToProps = dispatch => ({
  opony: () => dispatch({type: 'OPONY'}),
  zarowki: () => dispatch({type: 'ZAROWKI'}),
  audio: () => dispatch({type: 'AUDIO'}),
  silnik: () => dispatch({type: 'SILNIK'})
})

const PartsListView = (props) => (
  <div>
    <Button bsStyle="info" onClick={props.opony}>Opony</Button>

    <Button bsStyle="info" onClick={props.zarowki}>Żarówki</Button>

    <Button bsStyle="info" onClick={props.audio}>Audio</Button>

    <Button bsStyle="info" onClick={props.silnik}>Silnik</Button>
    {/*console.log({props.partsTypes});*/}
    <h1>Lista części typu:
      {
        props.partsTypes.filter(
          type =>
          type.id === props.selectedType
        ).map(
          type => type.type
        )
      }
    </h1>
      <ListGroup>

        {

          props.parts.filter(
            part => part.typeId === props.selectedType
          ).filter(
            (part) => props.selectedModel === null ? true : props.selectedModel.partsIds.indexOf( part.id ) != -1
          ).map(
            (part) => (
              <ListGroupItem key={part.id}>
                <h2>
                  {part.name}
                </h2>

                <LinkContainer to={'/parts-list/' + part.id+""}>
                  <Button bsStyle="info">Opis produktu</Button>
                </LinkContainer>

                <LinkContainer to={'/parts-list/' + part.id + "/shops"}>
                  <Button bsStyle="info">Lista hurtowni</Button>
                </LinkContainer>
                {part.id === parseInt(props.params.partId) ? props.children : null}
              </ListGroupItem>
            )
          )
        }
      </ListGroup>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(PartsListView)