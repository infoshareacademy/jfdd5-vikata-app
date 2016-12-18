/**
 * Created by mlacki on 14.12.16.
 */
import {SplitButton, MenuItem, Navbar, Nav, NavDropdown} from "react-bootstrap";
import React from "react";
import {brands, models} from "../data";

export default class CarSelectionForm extends React.Component {

  constructor() {
    super()

    this.handleBrandClick = eventKey => {
      var selectedBrandData = brands.find(brand => brand.id === eventKey);
      this.setState({
        brand: selectedBrandData,
        model: {name: 'wybierz model'}
      })
    }

    this.state = {
      brand: {name: 'wybierz markę'},
      model: {name: 'wybierz model'}
    }

    this.handleModelClick = eventKey => {
      var selectedModel = models.find(model => model.id === eventKey);
      this.setState({
        model: selectedModel
      })
    }
  }

  render() {

    const brandsListItems = brands.map(
      brand =>
        <MenuItem eventKey={brand.id}>{brand.name} </MenuItem>
    );

    const modelsListItems = models.filter(
      model => this.state.brand.modelsIds ? this.state.brand.modelsIds.indexOf(model.id) !== -1 : false
    ).map(
      model =>
        <MenuItem eventKey={model.id}>{model.name} </MenuItem>
    );



    return (

      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">FILTRUJ CZĘŚCI:</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown bsStyle="1" title={this.state.brand.name} key={1} id={`nav-dropdown`}
                         onSelect={this.handleBrandClick}>
              {brandsListItems}
            </NavDropdown>

            <NavDropdown bsStyle="1"  disabled={this.state.brand.name ==='wybierz markę'}title={this.state.model.name} key={2} id={`nav-dropdown`}
                         onSelect={this.handleModelClick}>
              {modelsListItems}
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    )
  }
}