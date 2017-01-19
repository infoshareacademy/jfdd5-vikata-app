/**
 * Created by mlacki on 14.12.16.
 */
import {MenuItem, Navbar, Nav, NavDropdown, NavItem} from "react-bootstrap";
import React from "react";
import { connect } from 'react-redux'
import logo from './logo.png'
// import './CarSelectionForm.css'

const mapStateToProps = state => ({
  // students: state.studentsData.students
  brands: state.appData.brands,
  models: state.appData.models,
  selectedBrand: state.appData.selectedBrand,
  selectedModel: state.appData.selectedModel
})

const mapDispatchToProps = dispatch => ({
  setBrand: brandId => dispatch({type: 'SET_BRAND', brandId: brandId}),
  setModel: modelId => dispatch({type: 'SET_MODEL', modelId: modelId}),
  resetSelection: resetId => dispatch({type: 'RESET'})
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
        <Navbar className="navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <img src={logo}/>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav >
            <NavDropdown className="navbar"
                         bsStyle="1"
                         title={this.props.selectedBrand ? this.props.selectedBrand.name : 'Wybierz markę'}
                         key={1}
                         id={`nav-dropdown`}
                         onSelect={(eventKey) => this.props.setBrand(eventKey)}>
              {brandsListItems}
            </NavDropdown>

            <NavDropdown bsStyle="1"
                         disabled={this.props.selectedBrand === null}
                         title={this.props.selectedModel ? this.props.selectedModel.name : 'Wybierz model'}
                         key={2}
                         id={`nav-dropdown`}
                         onSelect={(eventKey) => this.props.setModel(eventKey)}>
              {modelsListItems}
            </NavDropdown>

            <NavItem onSelect={() => this.props.resetSelection() }> Resetuj wybór</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarSelectionForm)