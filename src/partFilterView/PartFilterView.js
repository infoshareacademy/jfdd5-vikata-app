/**
 * Created by alanw on 17.01.2017.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Well, ButtonGroup, DropdownButton, MenuItem, Button, ControlLabel, Label} from 'react-bootstrap'

const mapDispatchToProps = dispatch => ({
  setType: (vehicleType) => dispatch({type: 'SET_VEHICLE_TYPE', vehicleType: vehicleType})
})

const mapStateToProps = state => ({
  partsTypes: state.appData.partsTypes,
  vehicleTypes: state.appData.vehicleTypes,
  selectedType: state.appData.selectedType,
  selectedVehicleType: state.appData.selectedVehicleType
})

class PartFilterView extends React.Component {

  render() {
    return (
    <Well>
      <ControlLabel>Aktywne filtry:</ControlLabel>

      <Label>{
        this.props.selectedType===null||undefined ? true : (
          this.props.partsTypes.find(
            type =>
            type.id === this.props.selectedType
          ).type.toLowerCase()
        )
      }</Label>

     <Label>{
        this.props.selectedVehicleType===null||undefined ? true : (
        this.props.vehicleTypes.find(
          type =>
          type.id === this.props.selectedVehicleType
        ).name)
      }</Label>

      <div></div><hr/>

      <ControlLabel>Filtruj typ pojazdu</ControlLabel><div></div>

      <ButtonGroup>
        <DropdownButton title="lądowe" id="ladowe-dropdown">
          <MenuItem onClick={() => this.props.setType(1)}>samochody</MenuItem>
          <MenuItem onClick={() => this.props.setType(2)}>motocykle</MenuItem>
          <MenuItem onClick={() => this.props.setType(3)}>inne (lądowe)</MenuItem>
        </DropdownButton>

        <DropdownButton title="latające" id="latajace-dropdown">
          <MenuItem onClick={() => this.props.setType(4)}>samoloty</MenuItem>
          <MenuItem onClick={() => this.props.setType(5)}>helikoptery</MenuItem>
          <MenuItem onClick={() => this.props.setType(6)}>inne (latające)</MenuItem>
        </DropdownButton>

        <DropdownButton title="pływające" id="plywajace-dropdown">
          <MenuItem onClick={() => this.props.setType(7)}>statki</MenuItem>
          <MenuItem onClick={() => this.props.setType(8)}>łodzie podwodne</MenuItem>
          <MenuItem onClick={() => this.props.setType(9)}>inne (pływające)</MenuItem>
        </DropdownButton>

        <Button onClick={() => this.props.setType(null)}>Reset</Button>
      </ButtonGroup>
    </Well>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (PartFilterView)