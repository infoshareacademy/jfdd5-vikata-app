/**
 * Created by alanw on 15.12.2016.
 */
import React from 'react'
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import {types} from '../data'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'


const mapStateToProps = state => ({
  partsTypes: state.appData.partsTypes,
  parts: state.appData.parts,
  selectedType: state.appData.selectedType,
  selectedModel: state.appData.selectedModel
})

const mapDispatchToProps = dispatch => ({
  opony: () => dispatch({type: 'SELECT_PARTS', typeId: 1}),
  zarowki: () => dispatch({type: 'SELECT_PARTS', typeId: 2}),
  audio: () => dispatch({type: 'SELECT_PARTS', typeId: 3}),
  silnik: () => dispatch({type: 'SELECT_PARTS', typeId: 4}),
  showType: (typeId) => dispatch({type: 'SELECT_PARTS', typeId: typeId})
})

const PartsListView = (props) => (
  <div>
    <Grid>
      <h2>Typy części</h2>
      <Row className="show-grid">
        <ul>
          {
            types.map(
              typ =>
                <Col md={4} xs={6}>
                  <li key={typ.id}>
                    <Link to="">
                      <img src={process.env.PUBLIC_URL + '/img/' + typ.image}
                           role="presentation" onClick={()=>props.showType(typ.id)}
                      />
                    </Link>
                    {/*<img src={process.env.PUBLIC_URL + '/img/' + typ.image}*/}
                         {/*role="presentation" onClick={props.opony}*/}
                    {/*/>*/}
                  </li>
                </Col>
            )
          }
        </ul>
        <Col xs={12}>
          {props.children}
        </Col>
      </Row>
    </Grid>

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
    <ul>
      <ListGroup>

        {

          props.parts.filter(
            part => part.typeId === props.selectedType
          ).filter(
            (part) => (props.selectedModel != null && props.selectedModel.partsIds.indexOf( part.id ) != -1)
          ).map(
            (part) => (
              <ListGroupItem key={part.id}>
                <h2>
                  {part.name}
                </h2>

                <LinkContainer to={part.id+""}>
                  <Button bsStyle="info">Opis produktu</Button>
                </LinkContainer>

                <LinkContainer to={part.id + "/shops"}>
                  <Button bsStyle="info">Lista hurtowni</Button>
                </LinkContainer>

              </ListGroupItem>
            )
          )
        }
      </ListGroup>
    </ul>
    {props.children}
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(PartsListView)