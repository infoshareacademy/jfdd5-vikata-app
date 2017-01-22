/**
 * Created by rafalmiler on 15.12.16.
 */
import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

import {connect} from 'react-redux'
import { Col, Clearfix, Well} from 'react-bootstrap'

import './TypesView.css'

const mapStateToProps = state => ({
  selectedType: state.appData.selectedType,
  partsTypes: state.typesData.partsTypes
})

const mapDispatchToProps = dispatch => ({
  showType: (typeId) => dispatch({type: 'SELECT_PARTS', typeId: typeId})
})

const TypesView = (props) => (
      <ListGroup>
        <Well>
          {
            props.partsTypes.map(
              typ =>
                <Col md={4} key={typ.id}
                     onClick={() => props.showType(typ.id)}
                     className="TypesView-tile">
                  <ListGroupItem key={typ.id}
                                 className={
                                   typ.id === props.selectedType ?
                                     'TypesView-selected-type' : ''
                                 }>
                    <h2>{typ.type}</h2>
                    <img src={process.env.PUBLIC_URL + '/img/img-types/' + typ.image}
                         role="presentation"
                    />
                  </ListGroupItem>
                </Col>
            )
          }
          <Clearfix/>
        </Well>
      </ListGroup>
)

export default connect(mapStateToProps, mapDispatchToProps)(TypesView)