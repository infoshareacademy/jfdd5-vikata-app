/**
 * Created by alanw on 14.12.2016.
 */
import React from 'react'

import {shops, parts} from '../data'

export default (props) =>(
    <div>
        <h1>Hurtownie dla produktu o id:{props.params.shopId}</h1>
        <ul>
            {
              shops.map(
                shop =>
                  <li key={shop.id}>
                    {
                      parts.filter(
                        part => part.id.indexOf(part.id) !== -1
                      )
                    }
                  </li>
              )
            }
        </ul>
    </div>

)

