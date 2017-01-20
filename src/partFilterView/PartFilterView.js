/**
 * Created by alanw on 17.01.2017.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Well, ButtonGroup, DropdownButton, MenuItem, Button} from 'react-bootstrap'

const mapDispatchToProps = dispatch => ({
  setType: (vehicleType) => dispatch({type: 'SET_VEHICLE_TYPE', vehicleType: vehicleType})
})

class PartFilterView extends React.Component {

  render() {
    return (
    <Well>
      <ButtonGroup>
        <DropdownButton title="lądowe">
          <MenuItem onClick={() => this.props.setType(1)}>samochody</MenuItem>
          <MenuItem onClick={() => this.props.setType(2)}>motocykle</MenuItem>
          <MenuItem onClick={() => this.props.setType(3)}>inne</MenuItem>
        </DropdownButton>

        <DropdownButton title="pływające">
          <MenuItem onClick={() => this.props.setType(4)}>statki</MenuItem>
          <MenuItem onClick={() => this.props.setType(5)}>łodzie podwodne</MenuItem>
          <MenuItem onClick={() => this.props.setType(6)}>inne</MenuItem>
        </DropdownButton>

        <DropdownButton title="latające">
          <MenuItem onClick={() => this.props.setType(7)}>samoloty</MenuItem>
          <MenuItem onClick={() => this.props.setType(8)}>helikoptery</MenuItem>
          <MenuItem onClick={() => this.props.setType(9)}>inne</MenuItem>
        </DropdownButton>
        <Button onClick={() => this.props.setType(null)}>Reset</Button>
      </ButtonGroup>
    </Well>
    )
  }
}

export default connect(null,mapDispatchToProps) (PartFilterView)