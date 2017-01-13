import React from 'react'
import { connect} from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'
import './App.css';
import {CarSelectionForm} from '../CarSelectionForm'
import { TypesView } from '../TypesView'
import { UserWantedListView} from '../UserWantedListView'
import { UserSellListView} from '../UserSellListView'


const mapStateToProps = (state) => ({

})

class App extends React.Component {
  render() {
    return (
      <div className="App">
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


export default connect(mapStateToProps)(App);
