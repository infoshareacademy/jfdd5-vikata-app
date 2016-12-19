/**
 * Created by alanw on 16.12.2016.
 */
import React from 'react'
import{parts} from '../data'

export default (props) =>(
  <div>
    <h3>
      {
        parts.filter(
          part => part.id===parseInt(props.params.partId)
        ).map(
          part => part.name
        )
      }
      <p>
        {
          parts.filter(
            part => part.id===parseInt(props.params.partId)
          ).map(
            part => part.description
          )
        }
      </p>
    </h3>
  </div>
)