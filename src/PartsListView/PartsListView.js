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
  selectedType: state.appData.partsTypes,
  selectedPart: state.appData.selectedPart,
  selectedPartInfo: state.appData.selectedPartInfo,

})

const PartsListView = (props) => (
  <div>
    <h1>Lista części typu:
      {
        partsTypes.filter(
          type => type.id === props.selectedType
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

                <LinkContainer to={props.params.typeUrlId+"/"+part.id+"/"+2}>
                  <Button bsStyle="info">Lista hurtowni</Button>
                </LinkContainer>

                {part.id == props.params.partId ? props.children : null}
              </ListGroupItem>
            )
          )
        }
      </ListGroup>
    </ul>
  </div>
)

export default connect(mapStateToProps)(PartsListView)