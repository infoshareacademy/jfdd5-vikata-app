/**
 * Created by rafalmiler on 12.01.17.
 */
import React from 'react'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  isLogged: state.isLoggedData.isLogged
})

const LoginPanelView = (props) => (

  <div>
    <Button>Zaloguj się</Button>
    {console.log(props)}
  </div>
)

export default connect(mapStateToProps)(LoginPanelView)