/**
 * Created by rafalmiler on 13.01.17.
 */
import React from 'react'
import {connect} from 'react-redux'
import { loggedIn, logOut, failedLoginAttempt } from './actionCreators'
import { FormControl, FormGroup} from 'react-bootstrap'
import './LogForm.css'

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
  // logIn: (username, password) => dispatch(logIn(username, password))
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
      <div className="loginform">
        {this.props.isLogged ?
          <div>
            <h2>Witaj, {this.props.userLogin}</h2>
            <button onClick={() => this.props.logOut()}>
              Wyloguj
            </button>
          </div> :
          <div>
            <h2>Zaloguj się</h2>
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
              <button type="submit">Zaloguj</button>
              {
                this.props.failedLoginAttempt ?
                  <h4>
                    Coś się nie powiodło.<br/>
                    Weź się w garść!
                  </h4> :
                  ''
              }
              </FormGroup>


            </form>
            <button onClick={() => this.props.closeModal()}>Zamknij</button>
          </div>
        }
      </div>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LogForm)