/**
 * Created by alanw on 16.12.2016.
 */
import React from 'react'
import{parts} from '../data'
import {Image} from 'react-bootstrap'


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
            part => <div>
              {part.description}
              <Image src={process.env.PUBLIC_URL + '/img/img-parts/part'+part.id+'.jpg'} rounded responsive/>
            </div>
          )

        }
    </h3>

  </div>
)