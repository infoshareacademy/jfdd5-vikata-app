/**
 * Created by rafalmiler on 13.01.17.
 */
import React from 'react'
import {connect} from 'react-redux'
import { inlogged, logOut, failedLoginAttempt } from './actionCreators'

const mapStateToProps = state => ({
  isLogged: state.isLoggedData.isLogged,
  loggedUser: state.isLoggedData.loggedUser,
  failedLoginAttempt: state.isLoggedData.failedLoginAttempt
})

const mapDispatchToProps = dispatch => ({
  inlogged: (user) => dispatch(inlogged(user)),
  logOut: () => dispatch(logOut()),
  failedLoginAttempt: () => dispatch(failedLoginAttempt())
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
        this.props.inlogged(loggedUser)
            return (this.setState({
              ...this.state,
              isLogged: true,
              loggedUser: loggedUser
            }))
          }
        ).catch(() => console.error('Fetch went wrong - LogForm' + this.props.failedLoginAttempt()))
  }

  render() {
    return (
      <div>
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
              <inputLabel>Login:</inputLabel>

              <input type="text"
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

              <input type="password"
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
            </form>
          </div>
        }
      </div>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LogForm)