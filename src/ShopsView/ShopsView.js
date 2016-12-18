/**
 * Created by alanw on 14.12.2016.
 */
import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

import {shops, parts} from '../data'

export default (props) =>(
    <div>
      <h2>
        {
          parts.filter(
            part => part.id===parseInt(props.params.partId)
          ).map(
            part => part.name
          )
        } jest dostępny/a w sklepach:
      </h2>
        <ul>

                    {
                      shops.filter(
                        shop => shop.parts.find(
                          part => part.partId === parseInt(props.params.partId)
                        ) !== undefined
                      ).map(
                        shop =>
                          <ListGroup>
                            <ListGroupItem key={shop.id}>
                              {shop.name} cena:
                            {shop.parts.filter(
                              part => part.partId === parseInt(props.params.partId)
                            ).map(
                              part => part.price
                            )}
                            </ListGroupItem>
                          </ListGroup>
                      )
                    }


        </ul>
    </div>

)
