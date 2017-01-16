/**
 * Created by alanw on 16.01.2017.
 */
import React from 'react'

class PartToSellView extends React.Component{

  render(){
    return(
      <div>
        {this.props.part.name}
      </div>
    )
  }
}

export default PartToSellView