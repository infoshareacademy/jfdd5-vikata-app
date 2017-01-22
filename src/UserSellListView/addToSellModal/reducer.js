/**
 * Created by rafael on 21.01.17.
 */
import {
  ADD_ITEM_TO_SELL
} from './actionTypes'

const initialState = {
itemsToSell: []
}

export default (state = initialState, action)=>{
  switch(action.type){
    case ADD_ITEM_TO_SELL:
      return {
        ...state,
        itemsToSell: state.itemsToSell.concat([{itemToSellName:action.itemToSellName,itemToSellDescription:action.itemToSellDescription}])
      }
    default:
      return state
  }
}
