/**
 * Created by alanw on 17.01.2017.
 */
import React from 'react'
import {Well, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap'

class PartFilterView extends React.Component {

  render() {
    return (
    <Well>
      <ButtonGroup>
        <DropdownButton title="lądowe">
          <MenuItem>samochody</MenuItem>
          <MenuItem>motocykle</MenuItem>
          <MenuItem>inne</MenuItem>
        </DropdownButton>

        <DropdownButton title="pływające">
          <MenuItem>statki</MenuItem>
          <MenuItem>łodzie podwodne</MenuItem>
          <MenuItem>inne</MenuItem>
        </DropdownButton>

        <DropdownButton title="latające">
          <MenuItem>samoloty</MenuItem>
          <MenuItem>helikoptery</MenuItem>
          <MenuItem>inne</MenuItem>
        </DropdownButton>
      </ButtonGroup>
    </Well>
    )
  }
}

export default PartFilterView