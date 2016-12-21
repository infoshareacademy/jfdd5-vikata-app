import {brands, models, parts, shops, types} from "../data";


const initialState = {
  brands: brands,
  models: models,
  parts: parts,
  shops: shops,
  partsTypes: types,
  selectedBrand: null,
  selectedModel: null,
  selectedType: 1
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

    case 'OPONY':
      return  {
        ...state,
        selectedType: 1
      }

    case 'ZAROWKI':
      return {
        ...state,
        selectedType: 2
      }

    case 'AUDIO':
      return  {
        ...state,
        selectedType: 3
      }

    case 'SILNIK':
      return {
        ...state,
        selectedType: 4
      }

    case 'RESET':

      return initialState


    default:
      return state
  }
}


