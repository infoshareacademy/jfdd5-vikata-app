/**
 * Created by alanw on 16.12.2016.
 */
import React from 'react'
import{parts} from '../data'

export default (props) =>(
  <div>
    <h3>
      {/*{*/}
        {/*parts.filter(*/}
          {/*part => part.id===parseInt(props.params.partId)*/}
        {/*).map(*/}
          {/*part => part.name*/}
        {/*)*/}
      {/*}*/}
        {
          parts.filter(
            part => part.id===parseInt(props.params.partId)
          ).map(
            part => part.description
          )
        }
    </h3>
  </div>
)