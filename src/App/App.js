import React from 'react'
import { connect} from 'react-redux'
import {PageHeader, Grid, Row, Col} from 'react-bootstrap'
import './App.css';
import { TypesView } from '../TypesView'
import { UserWantedListView} from '../userWantedListView'
import { UserSellListView} from '../UserSellListView'
import PartFilterView from '../partFilterView/PartFilterView'
import { LoginPanelView } from '../LoginPanelView'
import { LogForm } from '../LoginPanelView'

const mapStateToProps = (state) => ({
  isLogged: state.logData.isLogged
})

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.isLogged === false ?
          <div><PageHeader bsClass="pageHeader">
            <div><h2>Autonaprawiacz</h2></div>
          </PageHeader>
            <LoginPanelView/></div> : <LogForm/>
        }
        <Grid fluid>
          <Row className="show-grid">
            {this.props.isLogged ?
              <Col md={2}>
                <UserSellListView/>
              </Col> : null
            }
            <Col
              md={this.props.isLogged ? 8 :12}>
              <TypesView/>
              <PartFilterView/>
              {this.props.children}
            </Col>
            {this.props.isLogged ?
              <Col md={2}>
                <UserWantedListView/>
              </Col> : null
            }
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App)