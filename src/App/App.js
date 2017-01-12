import React from 'react'
import {PageHeader, Row, Col, Grid, Clearfix} from 'react-bootstrap'
import './App.css';
import {CarSelectionForm} from '../CarSelectionForm'
import {TypesView} from '../TypesView'
import {LoginPanelView} from '../LoginPanelView'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PageHeader bsClass="pageHeader">Autonaprawiatch v.2.0
          <small>Nietypowe pojazdy</small>
        </PageHeader>
        <Grid>
          <Row className="show-grid">
            <Col md={9}>
              <CarSelectionForm/>
            </Col>
            <Col md={3}>
              <LoginPanelView/>
            </Col>
            <Clearfix/>
            <Col>
            <TypesView/>
            {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
