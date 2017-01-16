/**
 * Created by alanw on 13.01.2017.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Well, ListGroup, ListGroupItem, Image, Grid, Row, Col, Accordion, Panel} from 'react-bootstrap'
import PartToSellView from './PartToSellView/PartToSellView'

const mapStateToProps = state => ({
  parts: state.appData.parts,
  users: state.appData.users,
  loggedUser: state.appData.loggedUser
})

const UserSellLIstView = (props) => (
  <Well>
    <h3>Twoje rzeczy na sprzedaż</h3>
    <Accordion>
      {
        props.users.filter(
          user => user.id === props.loggedUser
        ).map(
          user => (
                props.parts.filter(
                  part => user.partsToSell.indexOf(part.id) !== -1
                ).map(
                  part =>
                    <Panel header={part.name} bsStyle="primary" eventKey={part.id}>
                      <PartToSellView part={part}/>
                    </Panel>
                )
          )
        )
      }
    </Accordion>
  </Well>

)

export default connect(mapStateToProps)(UserSellLIstView)