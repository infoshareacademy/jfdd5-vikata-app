/**
 * Created by alanw on 15.12.2016.
 */
import React from 'react'
import {ListGroup, ListGroupItem,Grid, Row, Col, Clearfix, Well, Image} from 'react-bootstrap'
import { connect } from 'react-redux'
import './PartsListView.css'

const mapStateToProps = state => ({
  partsTypes: state.appData.partsTypes,
  parts: state.appData.parts,
  selectedType: state.appData.selectedType,
  selectedModel: state.appData.selectedModel
})

const PartsListView = (props) => (
  <Grid>
    <Row className="show-grid">
      <Well>
        <h1>Lista części typu: {
        props.partsTypes.find(
          type =>
          type.id === props.selectedType
        ).type.toLowerCase()
      }
    </h1>
        <Col>
      <ListGroup>
        {
          props.parts.filter(
            part => part.typeId === props.selectedType
          ).filter(
            (part) => props.selectedModel === null ? true : props.selectedModel.partsIds.indexOf( part.id ) != -1
          ).map(
            (part) => (
              <ListGroupItem key={part.id}  className="PartsListView-tile">
                <Grid>
                  <Row className="show-grid">
                    <Col md={4}>
                      <Image src={process.env.PUBLIC_URL + '/img/img-parts/' + part.image} rounded responsive/>
                    </Col>
                    <Col md={6}>
                      <h2>
                        {part.name}
                      </h2>
                      <p>
                        {part.description}
                      </p>
                    </Col>
                  </Row>
                </Grid>

                {/*                <ButtonGroup>
                  <LinkContainer to={'/parts-list/' + part.id+""}>
                    <Button bsStyle="info">Opis produktu</Button>
                  </LinkContainer>

                  <LinkContainer to={'/parts-list/' + part.id + "/shops"}>
                    <Button bsStyle="info">Lista hurtowni</Button>
                  </LinkContainer>
                </ButtonGroup>
                 {part.id === parseInt(props.params.partId) ? props.children : null}*/}

              </ListGroupItem>
            )
          )
        }
      </ListGroup>
        </Col>
        <Clearfix/>
      </Well>
    </Row>
  </Grid>
)

export default connect(mapStateToProps)(PartsListView)