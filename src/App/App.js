import React from 'react'
import {PageHeader, Row, Col, Grid, Clearfix} from 'react-bootstrap'
import './App.css';
import {CarSelectionForm} from '../CarSelectionForm'
import {TypesView} from '../TypesView'
import {LogForm} from '../LoginPanelView'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PageHeader bsClass="pageHeader">Autonaprawiatch v.2.0
          <small>Nietypowe pojazdy</small>
        </PageHeader>
        <LogForm/>
        <Grid>
          <Row className="show-grid">
            <Col>
              <CarSelectionForm/>
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
