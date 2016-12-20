import React from 'react'
import {CarSelectionForm} from '../CarSelectionForm'
import { connect} from 'react-redux'
import './App.css';
import { TypesView } from '../TypesView'

const mapStateToProps = (state) => ({

})

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to AUTONAPRAWIACZ</h2>
        </div>

      <CarSelectionForm/>

        {this.props.children}
      </div>
    );
  }
}


export default connect(mapStateToProps)(App);
