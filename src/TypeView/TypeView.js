/**
 * Created by rafalmiler on 16.12.16.
 */
import React from 'react'
import {types} from '../data'

export default (props) =>(
  <div>
    <h1>Typ {props.params.typeId}</h1>
    <h2>
      {
      types.find(
        type => type.id === parseInt(props.params.typeId)
      ).type
      }
    </h2>
  </div>
)