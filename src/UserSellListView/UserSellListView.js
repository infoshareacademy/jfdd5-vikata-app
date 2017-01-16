/**
 * Created by alanw on 13.01.2017.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Well, ListGroup, ListGroupItem, Image, Grid, Row, Col} from 'react-bootstrap'

const mapStateToProps = state => ({
  parts: state.appData.parts,
  users: state.appData.users,
  loggedUser: state.appData.loggedUser
})

const UserSellLIstView = (props) => (
  <Well>
    <h3>Twoje rzeczy na sprzedaż</h3>
    <ListGroup>
      {
        props.users.filter(
          user => user.id === props.loggedUser
        ).map(
          user =>
            <div>
              {
                props.parts.filter(
                  part => user.partsToSell.indexOf(part.id) !== -1
                ).map(
                  part => <ListGroupItem>{part.name}</ListGroupItem>
                )
              }
            </div>
        )
      }
    </ListGroup>
  </Well>

)

export default connect(mapStateToProps)(UserSellLIstView)