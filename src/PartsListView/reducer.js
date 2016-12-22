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
  return {
    ...state,
    selectedType: action.type
  }

}