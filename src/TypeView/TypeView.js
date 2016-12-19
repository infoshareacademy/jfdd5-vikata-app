/**
 * Created by rafalmiler on 16.12.16.
 */
import React from 'react'
import {types, parts} from '../data'

export default (props) => (
  <div>
    <h2> Typ {props.params.typeId}</h2>
    <ul>
      {
        types.filter(
          typ => typ.id === parseInt(props.params.typeId))
          .map(
            typ =>
              <div>
                <li key={typ.id}>
                  <h3>
                      {typ.type}
                  </h3>
                  <ul>
                    {parts.filter(
                      part => part.typeId === typ.id
                    ).map(
                      part =>
                        <li key={part.id}>
                          <a href="#">
                          {part.name}
                        </a>
                        </li>
                    )
                    }
                  </ul>
                </li>
              </div>
          )
      }
    </ul>
  </div>


)
