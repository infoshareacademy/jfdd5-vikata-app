import {brands, models, parts, shops, types} from "../data";


const initialState = {
  brands: brands,
  models: models,
  parts: parts,
  shops: shops,
  types: types,
  selectedBrand: null,
  selectedModel: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BRAND':
      return {
        ...state,
        selectedBrand: state.brands.find(brand => action.brandId === brand.id)
      }

      case 'SET_MODEL':
      return {
        ...state,
        selectedModel: state.models.find(model => action.modelId === model.id)
      }

    case 'RESET':

      return initialState


    default:
      return state
  }
}


