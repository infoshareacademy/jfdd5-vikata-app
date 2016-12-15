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


  }


  render ()
  {

    const brandsListItems = brands.map(
      brand  =>
       <MenuItem eventKey={brand.id}>{brand.name} </MenuItem>
    )

    {/*const modelsListItems =*/}

      {/*models.filter(*/}
    //     model => model.modelsIds.indexOf(model.id) !== -1
    //   ).map(
    //   model =>
    //     <MenuItem key={model.id}> {model.name} </MenuItem>
    //
    // )

    return (

    <div>
      <h1> SEARCH BY MODEL </h1>

      <SplitButton bsStyle="1" title="MARKA" key={1} id={`split-button-basic-1`} onSelect={(eventKey) => fun1(eventKey)}>
        {brandsListItems}
      </SplitButton>

      <SplitButton bsStyle="1" title="MODEL" key={2} id={`split-button-basic-1`}>
        {/*{modelsListItems}*/}
      </SplitButton>


    </div>

    )
  }

}

