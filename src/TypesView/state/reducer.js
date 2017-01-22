/**
 * Created by rafael on 21.01.17.
 */
import {
  FETCH_TYPES_BEGIN,
  FETCH_TYPES_END
} from './actionTypes'

const initialState = {
  partsTypes: [],
  selectedType: null
}

export default (state = initialState, action)=>{
  switch(action.type){
    case FETCH_TYPES_BEGIN:
      return {
        ...state
      }
    case FETCH_TYPES_END:
      return {
        ...state,
        partsTypes: action.types
      }
    case 'SELECT_PARTS':
      return  {
        ...state,
        selectedType: action.typeId
      }
    default:
      return state
  }
}
