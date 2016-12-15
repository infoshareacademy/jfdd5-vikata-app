/**
 * Created by rafalmiler on 15.12.16.
 */
import React from 'react'
import {parts, types} from '../data'

export default (props) => {
  console.log(types)
  return (
    <div>
      <h2>Typy części</h2>
      <ul>
        {
          types.map(
            typ =>
              <li key={typ.id}>{typ.type}
                <ul>
                  {parts.filter(
                    part => part.typeId == typ.id
                  ).map(
                    part =>
                      <li key={part.id}>
                        {part.name}
                      </li>
                  )
                  }
                </ul>

              </li>
          )

        }

      </ul>
    </div>
  )
}