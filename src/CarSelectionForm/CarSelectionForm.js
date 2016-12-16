/**
 * Created by mlacki on 14.12.16.
 */
import {SplitButton, MenuItem} from "react-bootstrap";
import React from "react";
import {brands, models} from "../data";

// import { Link } from 'react-router'

//
const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

export default class CarSelectionForm extends React.Component {

  constructor() {
    super()

    this.handleBrandClick = eventKey => {
      var selectedBrandData = brands.find(brand => brand.id === eventKey);
      this.setState({
        brand: selectedBrandData
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
        <h1> SEARCH BY MODEL </h1>

        <SplitButton bsStyle="1" title={this.state.brand.name} key={1} id={`split-button-basic-1`}
                     onSelect={this.handleBrandClick}>
          {brandsListItems}
        </SplitButton>

        <SplitButton bsStyle="1" title={this.state.model.name} key={2} id={`split-button-basic-1`}
                     onSelect={this.handleModelClick}>
          {modelsListItems}
        </SplitButton>

      </div>

    )
  }

}
