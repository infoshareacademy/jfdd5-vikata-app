/**
 * Created by alanw on 16.01.2017.
 */
import React from 'react'
import {Button,  Image} from 'react-bootstrap'

class PartWantedView extends React.Component{

  render(){
    return(
      <div style={{maxHeight:700 ,overflowY:'auto'}}>

        <h3>Zdjęcie:</h3>
        <Image src={process.env.PUBLIC_URL + '/img/img-parts/'+this.props.part.image} rounded responsive/>
        <Button bsStyle="info" block>Zmień</Button>
        <hr/>

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