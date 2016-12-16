/**
 * Created by alanw on 15.12.2016.
 */
import React from 'react'
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import {types, parts} from '../data'

export default (props) => (
  <div>
    <h1>Lista części typu:
      {
        types.filter(
          type => type.id === parseInt(props.params.typeUrlId)
        ).map(
          type => type.type
        )
      }
    </h1>
    <ul>
      <ListGroup>

        {
          parts.filter(
            part => part.typeId === parseInt(props.params.typeUrlId)
          ).map(
            part => (
              <ListGroupItem key={part.id}>
                <h2>
                  {part.name}
                </h2>
                <Button bsStyle="info">Opis produktu</Button>
                <LinkContainer to={"/partslist/"+props.params.typeUrlId+"/"+part.id}>
                  <Button bsStyle="info">Lista hurtowni</Button>
                </LinkContainer>

                {part.id == props.params.partId ? props.children : null}
              </ListGroupItem>
            )
          )
        }
      </ListGroup>
    </ul>
  </div>
)