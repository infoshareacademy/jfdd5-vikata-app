/**
 * Created by rafael on 21.01.17.
 */
import {
  FETCH_PARTS_BEGIN,
  FETCH_PARTS_END
} from './actionTypes'

const initialState = {
  parts: []
}

export default (state = initialState, action)=>{
  switch(action.type){
    case FETCH_PARTS_BEGIN:
      return {
        ...state
      }
    case FETCH_PARTS_END:
      return {
        ...state,
        parts: action.parts
      }
    default:
      return initialState
  }
}
