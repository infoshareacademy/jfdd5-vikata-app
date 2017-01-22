import {parts, users, types,vehicleType} from "../data";


const initialState = {
  parts: parts,
  users: users,
  partsTypes: types,
  selectedVehicleType: null,
  vehicleTypes:vehicleType,
  loggedUser: 1
}

export default (state = initialState, action) => {
  switch (action.type) {

      case 'SET_VEHICLE_TYPE':
      return {
        ...state,
        selectedVehicleType: action.vehicleType
      }

    case 'RESET':
      return initialState

    default:
      return state
  }
}


