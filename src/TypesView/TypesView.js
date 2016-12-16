/**
 * Created by rafalmiler on 15.12.16.
 */
import React from 'react'
import {parts, types} from '../data'
import {Grid,Row,Col} from 'react-bootstrap'

export default (props) => {
  console.log(types)
  return (
    <Grid>
      <h2>Typy części</h2>
      <Row className="show-grid">
      <ul>
        {
          types.map(
            typ =>
            <Col md={4} >
              <li key={typ.id}>{typ.type}
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
      </Row>
    </Grid>
  )
}