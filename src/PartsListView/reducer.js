/**
 * Created by alanw on 19.12.2016.
 */
import {types, parts} from '../data'

const initialState = {
  selectedType: 1,
  partsTypes: types,
  parts: parts
}

export default (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state
  }
}