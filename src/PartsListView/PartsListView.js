/**
 * Created by alanw on 15.12.2016.
 */
import React from 'react'

import {types} from '../data'

export default (props) => (
  <div>
    <h1>Lista części typu:
      {
        types.filter(
          type => type.id === parseInt(props.params.typeUrlId)
        ).map(
          type => type.type
        )
      }
    </h1>
  </div>
)