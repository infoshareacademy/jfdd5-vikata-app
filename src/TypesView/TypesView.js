/**
 * Created by rafalmiler on 15.12.16.
 */
import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

import {connect} from 'react-redux'
import {Grid, Row, Col, Clearfix, Well} from 'react-bootstrap'

import './TypesView.css'

const mapStateToProps = state => ({
  partsTypes: state.appData.partsTypes,
  selectedType: state.appData.selectedType,
})

const mapDispatchToProps = dispatch => ({
  showType: (typeId) => dispatch({type: 'SELECT_PARTS', typeId: typeId})
})

const TypesView = (props) => (
  <Grid>
    <h2>Typy części</h2>
    <Row className="show-grid">
      <ListGroup>
        <Well>
          {
            props.partsTypes.map(
              typ =>
                <Col md={4}
                     xs={6}
                     onClick={() => props.showType(typ.id)}
                     className="TypesView-tile">
                  <ListGroupItem key={typ.id}
                                 className={
                                   typ.id === props.selectedType ?
                                     'TypesView-selected-type' : ''
                                 }>
                    <h2>{typ.type}</h2>
                    <img src={process.env.PUBLIC_URL + '/img/' + typ.image}
                         role="presentation"
                    />
                  </ListGroupItem>
                </Col>
            )
          }
          <Clearfix/>
        </Well>
      </ListGroup>
    </Row>
  </Grid>
)

export default connect(mapStateToProps, mapDispatchToProps)(TypesView)