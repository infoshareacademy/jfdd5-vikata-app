/**
 * Created by rafalmiler on 13.01.17.
 */
import React from 'react'
import {connect} from 'react-redux'
import { loggedIn, logOut, failedLoginAttempt } from './actionCreators'
import {FormControl, FormGroup, Nav, Navbar, Button, Glyphicon, ButtonGroup} from 'react-bootstrap'
import {Col, Row, Well} from 'react-bootstrap'

const mapStateToProps = state => ({
  isLogged: state.logData.isLogged,
  loggedUser: state.logData.loggedUser,
  failedLoginAttempt: state.logData.failedLoginAttempt,
  userLogin: state.logData.loggedUserName
})

const mapDispatchToProps = dispatch => ({
  loggedIn: (user) => dispatch(loggedIn(user)),
  logOut: () => dispatch(logOut()),
  failedLoginAttempt2: () => dispatch(failedLoginAttempt()),
})

class LogForm extends React.Component {
  constructor() {
    super()

    this.state = ({
      isLogged: false,
      login: '',
      userLogin: '',
      userPassword: '',
      loggedUser: ''
    })
  }

  handleSubmit = (event) => {

    event.preventDefault()
    fetch(
      process.env.PUBLIC_URL + '/data/users.json'
    ).then(
      response => response.json()
    ).then(
      users =>
        users.find(
          user =>
          user.password === this.state.userPassword && user.login === this.state.userLogin
        )
    ).then(
      (loggedUser) => {
        if (loggedUser === undefined) {
          this.props.failedLoginAttempt2()
        } else {
          this.props.loggedIn(loggedUser)
          this.setState({
            ...this.state,
            isLogged: true,
            loggedUser: loggedUser
          })
        }
      })
  }

  render() {
    return (
      <div>
        {this.props.isLogged ?

          <Navbar inverse fluid style={{borderRadius: 0, marginBottom: 0}}>
            <Navbar.Header>
              <Navbar.Brand >
                <a href="#">Find My Part</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <ButtonGroup style={{marginTop:6}}>
                  <Button bsStyle="primary" disabled><Glyphicon glyph="user"></Glyphicon> {this.props.userLogin}
                  </Button>
                  <Button bsStyle="primary" onClick={() => this.props.logOut()}>Wyloguj</Button>
                </ButtonGroup>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

           :
          <div className="loginform">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="formBasicText">
              <inputLabel>Login:</inputLabel>

              <FormControl type="text"
                     value={this.state.userLogin}
                     onChange={
                       event =>
                         this.setState({
                           userLogin: event.target.value
                         })
                     }
              />
              <br/>

              <inputLabel>Hasło</inputLabel>

              <FormControl type="password"
                     value={this.state.userPassword}
                     onChange={
                       event =>
                         this.setState({
                           userPassword: event.target.value
                         })
                     }
              />
              <br/>
              <br/>
                <Button bsStyle="success" type="submit">Zaloguj</Button>
              {
                this.props.failedLoginAttempt ?
                  <h4>
                    Logowanie nie powiodło się.
                  </h4> :
                  ''
              }
              </FormGroup>
            </form>
          </div>
        }
      </div>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LogForm)