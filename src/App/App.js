import React from 'react'
import { connect} from 'react-redux'
import { Grid, Row, Col} from 'react-bootstrap'
import './App.css';
import { TypesView } from '../TypesView'
import { UserWantedListView} from '../userWantedListView'
import { UserSellListView} from '../UserSellListView'
import PartFilterView from '../partFilterView/PartFilterView'
import PageHeader from '../pageHeader/PageHeader'
import { LogForm } from '../LoginPanelView'

const mapStateToProps = (state) => ({
  isLogged: state.logData.isLogged
})

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.isLogged === false ?
          <PageHeader/>
          : <LogForm/>
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