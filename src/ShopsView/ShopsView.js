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
                      shops.filter(
                        shop => shop.parts.find(
                          part => part.partId === parseInt(props.params.shopId)
                        ) !== undefined
                      ).map(
                        shop =>
                          <li key={shop.id}>
                            {shop.name}
                            {shop.parts.filter(
                              part => part.partId === parseInt(props.params.shopId)
                            ).map(
                              part =>
                                <li key={part.id}>
                                  {part.price}
                                </li>
                            )}
                          </li>)
                    }


        </ul>
    </div>

)

