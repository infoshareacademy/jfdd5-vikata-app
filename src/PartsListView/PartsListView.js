/**
 * Created by alanw on 15.12.2016.
 */
import React from 'react'
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'

// import {types, parts} from '../data'

const mapStateToProps = state => ({
  partsTypes: state.appData.partsTypes,
  parts: state.appData.parts,
  selectedType: state.appData.selectedType,
  selectedPart: state.appData.selectedPart,
  selectedPartInfo: state.appData.selectedPartInfo
})

const mapDispatchToProps = dispatch => ({
  opony: () => dispatch({type: 'OPONY'}),
  zarowki: () => dispatch({type: 'ZAROWKI'})
})

const PartsListView = (props) => (
  <div>
    <Button bsStyle="info" onClick={props.opony}>Opony</Button>

    <Button bsStyle="info" onClick={props.zarowki}>Żarówki</Button>
    {/*console.log({props.partsTypes});*/}
    <h1>Lista części typu:
      {
        props.partsTypes.map(
          type => (console.log(type, props.selectedType), type)
        ).filter(
          type => type.id === props.selectedType
        ).map(
          type => (console.log(type), type)
        ).map(
          type => type.type
        )
      }
    </h1>
    <ul>
      <ListGroup>

        {
          props.parts.filter(
            part => part.typeId === props.selectedType
          ).map(
            part => (
              <ListGroupItem key={part.id}>
                <h2>
                  {part.name}
                </h2>

                <LinkContainer to={props.params.selectedType+"/"+props.params.selectedPart}>
                  <Button bsStyle="info">Opis produktu</Button>
                </LinkContainer>

                <LinkContainer to={props.params.selectedType + "/" + props.params.selectedPart + "/" + 2}>
                  <Button bsStyle="info">Lista hurtowni</Button>
                </LinkContainer>

                {/*{part.id === props.params.partId ? props.children : null}*/}
              </ListGroupItem>
            )
          )
        }
      </ListGroup>
    </ul>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(PartsListView)