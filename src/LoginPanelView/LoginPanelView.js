/**
 * Created by rafalmiler on 12.01.17.
 */
import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = state =>({
  isLogged : state.isLoggedData.isLogged
})

const LoginPanelView =(props) => (

        <div>
          <h1>tresc</h1>
          <Button>Login</Button>
          {console.log(props)}
        </div>
)

export default connect(mapStateToProps)(LoginPanelView)