/**
 * Created by rafael on 21.01.17.
 */
import {
  FETCH_PARTS_BEGIN,
  FETCH_PARTS_END
} from './actionTypes'

export const fetchParts = () => dispatch => {
  dispatch({type: FETCH_PARTS_BEGIN})
  fetch(
    process.env.PUBLIC_URL + '/data/parts.json'
  ).then(
    response => response.json()
  ).then(
    parts => dispatch({type: FETCH_PARTS_END, parts: parts})
  ).catch(
    error => console.log('error fetching parts')
  )
}
