import React from 'react'
import { connect} from 'react-redux'
import {PageHeader, Grid, Row, Col} from 'react-bootstrap'
import './App.css';
import {CarSelectionForm} from '../CarSelectionForm'
import { TypesView } from '../TypesView'
import { UserWantedListView} from '../userWantedListView'
import { UserSellListView} from '../UserSellListView'
import {LogForm} from '../LoginPanelView'

const mapStateToProps = (state) => ({

})
import {LogForm} from '../LoginPanelView'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PageHeader bsClass="pageHeader">Autonaprawiatch v.2.0
          <small>Nietypowe pojazdy</small>
        </PageHeader>
        <LogForm/>
        <Grid fluid>
          <Row className="show-grid">
            <Col md={2}>
              <UserSellListView/>
            </Col>
            <Col md={8}>
              <CarSelectionForm/>
              <TypesView/>
              {this.props.children}
            </Col>
            <Col md={2}>
              <UserWantedListView/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default connect(mapStateToProps)(App)