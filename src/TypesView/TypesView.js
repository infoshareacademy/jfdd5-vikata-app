/**
 * Created by rafalmiler on 15.12.16.
 */
import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

import { connect } from 'react-redux'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'

const mapStateToProps = state => ({
  partsTypes: state.appData.partsTypes
})

const mapDispatchToProps = dispatch => ({
  showType: (typeId) => dispatch({type: 'SELECT_PARTS', typeId: typeId})
})

const TypesView = (props) => (
  <Grid>
    <h2>Typy części</h2>
    <Row className="show-grid">
      <ListGroup>
        {
          props.partsTypes.map(
            typ =>
              <Col md={4} xs={6}>
                <ListGroupItem key={typ.id}>
                  <Link to="">
                    <h2>{typ.type}</h2>
                    <img src={process.env.PUBLIC_URL + '/img/' + typ.image}
                         role="presentation" onClick={()=>props.showType(typ.id)}
                    />
                  </Link>
                </ListGroupItem>
              </Col>
          )
        }
      </ListGroup>
    </Row>
  </Grid>
)





  export default connect(mapStateToProps, mapDispatchToProps)(TypesView)