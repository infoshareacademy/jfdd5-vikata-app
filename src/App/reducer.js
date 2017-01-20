import {parts, users, types} from "../data";


const initialState = {
  parts: parts,
  users: users,
  partsTypes: types,
  selectedVehicleType: null,
  selectedType: 1,
  loggedUser: 1
}

export default (state = initialState, action) => {
  switch (action.type) {

      case 'SET_VEHICLE_TYPE':
      return {
        ...state,
        selectedVehicleType: action.vehicleType
      }

    case 'SELECT_PARTS':
      return  {
        ...state,
        selectedType: action.typeId
      }

    case 'RESET':
      return initialState

    default:
      return state
  }
}


