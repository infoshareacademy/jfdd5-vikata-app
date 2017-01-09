/**
 * Created by alanw on 22.12.2016.
 */
import React from 'react'
import icon from './garage.png'

export default (props) => (
  <div style={{
    backgroundColor:'#9ECCDC',
    backgroundImage:'url('+icon+')',
    backgroundRepeat:'no-repeat',
    borderRadius:'6',
    width:330,
    height: 32,
    paddingLeft:38,
    textAlign:'center',
    fontSize:20,
  }}>{props.text}</div>
)