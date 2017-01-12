import React from 'react'
import { PageHeader } from 'react-bootstrap'
import './App.css';
import { CarSelectionForm } from '../CarSelectionForm'
import { TypesView } from '../TypesView'
import { LoginPanelView } from '../LoginPanelView'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PageHeader bsClass="pageHeader">Autonaprawiatch v.2.0 <small>Nietypowe pojazdy</small></PageHeader>
        <LoginPanelView/>
        <CarSelectionForm/>
        <TypesView/>
          {this.props.children}
      </div>
    );
  }
}

export default App;
