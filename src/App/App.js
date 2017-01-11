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
        <PageHeader bsClass="pageHeader">Example page header <small>Subtext for header</small></PageHeader>

        {/*<Image src={process.env.PUBLIC_URL + '/img/img-header/headerBaner.jpg'}*/}
             {/*role="presentation"*/}
        {/*/>*/}
        <div className="wide">
          <div className="col-xs-5 line"><hr/></div>
          <div className="col-xs-2 logo">Logo</div>
          <div className="col-xs-5 line"><hr/></div>
        </div>
      <CarSelectionForm/>
        <TypesView/>
          {this.props.children}

      </div>
    );
  }
}


export default connect(mapStateToProps)(App);
