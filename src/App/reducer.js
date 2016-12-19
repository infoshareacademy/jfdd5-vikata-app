
import {brands, models, parts, shops, types} from "../data"


const initialState = {
  brands: brands,
  models: models,
  parts: parts,
  shops: shops,
  types: types

}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BRAND':
      return {
       ...state,
        filterNames: state.filterNames.concat(action.filterName)
      }



    default:
      return state
  }
}


