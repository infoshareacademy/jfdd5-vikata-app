/**
 * Created by rafalmiler on 15.12.16.
 */
import React from 'react'
import {parts, types} from '../data'
import { Link } from 'react-router'
import {Grid,Row,Col} from 'react-bootstrap'

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
                <h3>
                  <Link to={'/types/' + typ.id}>
                  {typ.type}</Link></h3>
                <ul>
                  {parts.filter(
                    part => part.typeId === typ.id
                  ).map(
                    part =>
                      <li key={part.id}>
                        {part.name}
                      </li>
                  )
                  }
                </ul>
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