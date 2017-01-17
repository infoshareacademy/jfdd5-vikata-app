/**
 * Created by alanw on 13.01.2017.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Well, Accordion, Panel} from 'react-bootstrap'
import {AutoAffix} from 'react-overlays'
import PartWantedView from './partWantedView/PartWantedView'
import AddToWantedModal from './addToWantedModal/AddToWantedModal'

const mapStateToProps = state => ({
  parts: state.appData.parts,
  users: state.appData.users,
  loggedUser: state.appData.loggedUser
})

const UserWantedListView = (props) => (

  <AutoAffix>
    <Well style={{overflowY:'auto'}}>
      <h3>Twoje rzeczy których potrzebujesz</h3>
      <Accordion>
        {
          props.users.filter(
            user => user.id === props.loggedUser
          ).map(
            user => (
              props.parts.filter(
                part => user.partsWanted.indexOf(part.id) !== -1
              ).map(
                part =>
                  <Panel header={part.name} bsStyle="primary" eventKey={part.id}>
                    <PartWantedView part={part}/>
                  </Panel>
              )
            )
          )
        }
      </Accordion>
      <AddToWantedModal/>
    </Well>
  </AutoAffix>
)

export default connect(mapStateToProps)(UserWantedListView)