/**
 * Created by alanw on 16.01.2017.
 */
import React from 'react'
import {Button} from 'react-bootstrap'

class PartWantedView extends React.Component{

  render(){
    return(
      <div style={{maxHeight:700 ,overflowY:'auto'}}>

        <h3>Opis:</h3>
        {this.props.part.description}
        <Button bsStyle="info" block>Edytuj</Button>
        <hr/>

        <Button bsStyle="danger" block>Usuń przedmiot</Button>
      </div>
    )
  }
}

export default PartWantedView