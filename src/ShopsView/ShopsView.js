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
              parts.map(
                part =>
                  <li key={part.id}>
                    {
                      shops.filter(
                        shop => shop.partsIds.indexOf(part.id) !== -1
                      ).map(
                        shop =>
                          <li key={shop.id}>
                            {shop.name}
                          </li>
                      )
                    }
                  </li>
              )
            }
        </ul>
    </div>

)

