/**
 * Created by alanw on 22.12.2016.
 */
import React from 'react'

export default (props) => (
  <div style={{
    background: 'pink',
    width: 50,
    height: 50,
    borderRadius:'50%'
  }}>{props.text}</div>
)