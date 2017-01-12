import React from 'react'
import { connect} from 'react-redux'
import { PageHeader, Image } from 'react-bootstrap'
import './App.css';
import {CarSelectionForm} from '../CarSelectionForm'
import { TypesView } from '../TypesView'


const mapStateToProps = (state) => ({

})

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <CarSelectionForm/>
        <TypesView/>
          {this.props.children}

      </div>
    );
  }
}


export default connect(mapStateToProps)(App);
