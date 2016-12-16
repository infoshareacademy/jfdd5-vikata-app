import React from 'react'
import {CarSelectionForm} from '../CarSelectionForm'
import { connect} from 'react-redux'

const mapStateToProps = (state) => ({

})

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="" className="App-logo" alt="logo" />
          <h2>Welcome to AUTONAPRAWIACZ</h2>
        </div>

      <CarSelectionForm/>

      </div>
    );
  }
}


export default connect(mapStateToProps)(App);
