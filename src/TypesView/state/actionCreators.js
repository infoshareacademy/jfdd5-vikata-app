/**
 * Created by rafael on 21.01.17.
 */
import {
  FETCH_TYPES_BEGIN,
  FETCH_TYPES_END
} from './actionTypes'

export const fetchTypes = () => dispatch => {
  dispatch({type: FETCH_TYPES_BEGIN})
  fetch(
    process.env.PUBLIC_URL + '/data/types.json'
  ).then(
    response => response.json()
  ).then(
    types => dispatch({type: FETCH_TYPES_END, types: types})
  ).catch(
    error => console.log('error fetching types')
  )
}
