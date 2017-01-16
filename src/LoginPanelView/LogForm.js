/**
 * Created by rafalmiler on 13.01.17.
 */
import React from 'react'
// import {Button, FormGroup, ControlLabel, HelpBlock, FormControl} from 'react-bootstrap'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  isLogged: state.isLoggedData.isLogged
})

const mapDispatchToProps = dispatch => ({

})

// function FieldGroup({ id, label, help, ...props }) {
//   return (
//     <FormGroup controlId={id}>
//       <ControlLabel>{label}</ControlLabel>
//       <FormControl {...props} />
//       {help && <HelpBlock>{help}</HelpBlock>}
//     </FormGroup>
//   );
// }


class LogForm extends React.Component {
  constructor() {
    super()

    this.state = ({
      isLogged: false,
      login: '',
      userLogin: '',
      userPassword: '',
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
        console.log(loggedUser)
            return (this.setState({
              ...this.state,
              isLogged: true,
              loggedUser: loggedUser
            }))
          }
        ).catch(() => console.error('error made'))
  }

  render() {
    return (
      <div>
        {this.state.isLogged ?
          <div>
            <h1>Witaj</h1>
            <button>
              Wyloguj
            </button>
          </div> :
          <div>
            <h1>Zaloguj się</h1>
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

            </form>
          </div>
        }

      </div>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LogForm)