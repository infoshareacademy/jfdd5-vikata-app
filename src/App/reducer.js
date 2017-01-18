import {parts, users, types} from "../data";


const initialState = {
  parts: parts,
  users: users,
  partsTypes: types,
  selectedBrand: null,
  selectedModel: null,
  selectedType: 1,
  loggedUser: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BRAND':
      return {
        ...state,
        selectedBrand: state.brands.find(brand => action.brandId === brand.id),
        selectedModel: null
      }

      case 'SET_MODEL':
      return {
        ...state,
        selectedModel: state.models.find(model => action.modelId === model.id)
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


