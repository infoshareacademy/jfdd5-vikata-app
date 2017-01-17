/**
 * Created by rafalmiler on 13.01.17.
 */
import React from 'react'
import {connect} from 'react-redux'
import { inlogged, logOut, failedLoginAttempt } from './actionCreators'
import { FormControl, FormGroup} from 'react-bootstrap'
import './LogForm.css'

const mapStateToProps = state => ({
  isLogged: state.isLoggedData.isLogged,
  loggedUser: state.isLoggedData.loggedUser,
  failedLoginAttempt: state.isLoggedData.failedLoginAttempt
})

const mapDispatchToProps = dispatch => ({
  inlogged: (user) => dispatch(inlogged(user)),
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
    //this.props.logIn(this.state.userLogin, this.state.userPassword)

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
          this.props.inlogged(loggedUser)
          this.setState({
            ...this.state,
            isLogged: true,
            loggedUser: loggedUser
          })
        }
      })
  }

  render() {
    console.log(this.props)
    return (
      <div className="loginform">
        {this.props.isLogged ?
          <div>
            <h2>Witaj</h2>
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
          </div>
        }
      </div>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LogForm)