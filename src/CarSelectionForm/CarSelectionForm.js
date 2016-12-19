/**
 * Created by mlacki on 14.12.16.
 */
import {MenuItem, Navbar, Nav, NavDropdown} from "react-bootstrap";
import React from "react";
import { connect } from 'react-redux'
// import {brands, models} from "../data";


const mapStateToProps = state => ({
  // students: state.studentsData.students
  brands: state.appData.brands,
  models: state.appData.models,
  selectedBrand: state.appData.selectedBrand,
  selectedModel: state.appData.selectedModel
})

const mapDispatchToProps = dispatch => ({
  // createStudent: studentName => dispatch({type: 'CREATE_STUDENT', name: studentName})
  setBrand: brandId => dispatch({type: 'SET_BRAND', brandId: brandId}),
  setModel: modelId => dispatch({type: 'SET_MODEL', modelId: modelId})
})


class CarSelectionForm extends React.Component {


  render() {

    console.log(this.props)
    const brandsListItems = this.props.brands.map(
      brand =>
        <MenuItem eventKey={brand.id}>{brand.name}</MenuItem>
    );

    const modelsListItems = this.props.selectedBrand !== null ? this.props.models.filter(
      model => this.props.selectedBrand.modelsIds.indexOf(model.id) !== -1
    ).map(
      model =>
        <MenuItem eventKey={model.id}>{model.name}</MenuItem>
    ) : []

    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">FILTRUJ CZĘŚCI:</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown bsStyle="1"
                         title={this.props.selectedBrand ? this.props.selectedBrand.name : 'Select brand'}
                         key={1}
                         id={`nav-dropdown`}
                         onSelect={(eventKey) => this.props.setBrand(eventKey)}>
              {brandsListItems}
            </NavDropdown>

            <NavDropdown bsStyle="1"
                         disabled={this.props.selectedBrand === null}
                         title={this.props.selectedModel ? this.props.selectedModel.name : 'Select model'}
                         key={2}
                         id={`nav-dropdown`}
                         onSelect={(eventKey) => this.props.setModel(eventKey)}>
              {modelsListItems}
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarSelectionForm)