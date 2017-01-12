/**
 * Created by alanw on 15.12.2016.
 */
import React from 'react'
import {ListGroup, ListGroupItem,Grid, Row, Col, Clearfix, Well, Image, Label, Button, Modal} from 'react-bootstrap'
import { connect } from 'react-redux'
import './PartsListView.css'
import ContactModal from './contactModal/ContactModal'

const mapStateToProps = state => ({
  partsTypes: state.appData.partsTypes,
  parts: state.appData.parts,
  users: state.appData.users,
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
            (part) => props.selectedModel === null ? true : props.selectedModel.partsIds.indexOf( part.id ) !== -1
          ).map(
            (part) => {
              const isToSell = props.users.map(
                user => user.partsToSell.indexOf(part.id) !== -1
              ).some(
                hasPart => hasPart === true
              )

              const userWhoWants = props.users.find(
                user => user.partsWanted.indexOf(part.id) !== -1
              )

              const userWhoSells = props.users.find(
                user => user.partsToSell.indexOf(part.id) !== -1
              )

              return (
                <ListGroupItem key={part.id}  className="PartsListView-tile">
                  <Grid>
                    <Row className="show-grid">
                      <Col md={4}>
                        <Image src={process.env.PUBLIC_URL + '/img/img-parts/' + part.image} rounded responsive/>
                      </Col>
                      <Col md={5}>
                        <h2>
                          {part.name}
                        </h2>
                        <p>
                          {part.description}
                        </p>
                      </Col>
                      <Col md={2}>
                        {
                          isToSell === true ?
                            <div>
                              <h2><Label bsStyle="success">Na sprzedaż</Label></h2>
                              <h3><Label bsStyle="info">Cena: {part.price}</Label></h3>
                            </div> : <h2><Label bsStyle="warning">Poszukiwane</Label></h2>
                        }

                        <ContactModal user={isToSell === true ? userWhoSells : userWhoWants}/>
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
            }
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