/**
 * Created by rafalmiler on 15.12.16.
 */
import React from 'react'
import {types} from '../data'
import {Link} from 'react-router'
import {Grid, Row, Col} from 'react-bootstrap'

export default (props) => {

  return (
    <Grid>
      <h2>Typy części</h2>
      <Row className="show-grid">
        <ul>
          {
            types.map(
              typ =>
                <Col md={4} xs={6}>
                  <li key={typ.id}>
                    <Link to={'/types/' + typ.id}>
                      <img src={process.env.PUBLIC_URL + '/img/' + typ.image}
                           role="presentation"
                      />
                    </Link>
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
  )
}