/**
 * Created by mlacki on 14.12.16.
 */
import {SplitButton, MenuItem} from 'react-bootstrap';
import React from 'react'

// import { Link } from 'react-router'

//
import {brands} from '../data'
import {models} from '../data'
const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

export default class CarSelectionForm extends React.Component {

  constructor() {
    super ()


    this.handleBrandClick = eventKey => {
      console.log(eventKey)
      this.setState({
        brand: brands.find( brand => brand.id === eventKey ).name
      })
    }

    this.state = {
      brand: {name:'MARKA'},
      model: 'MODEL'
    }

  }

  render ()
  {

    const brandsListItems = brands.map(
      brand  =>
       <MenuItem eventKey={brand.id}>{brand.name} </MenuItem>
    )
    const modelsListItems = this.state.brand.modelIds ? this.state.brand.modelIds : [];
   /* const modelsListItems = models.map(
      model => {

        //Key = {eventKey}
        return true;
      }

    )*/

    return (

    <div>
      <h1> SEARCH BY MODEL </h1>

      <SplitButton bsStyle="1" title={this.state.brand} key={1} id={`split-button-basic-1`} onSelect={this.handleBrandClick}>
        {brandsListItems}
      </SplitButton>

      <SplitButton bsStyle="1" title={this.state.model} key={2} id={`split-button-basic-1`}>
        {modelsListItems}
      </SplitButton>


    </div>

    )
  }

}

