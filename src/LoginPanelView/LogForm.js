/**
 * Created by rafalmiler on 13.01.17.
 */
import React from 'react'
import {Button, FormGroup, ControlLabel, HelpBlock, FormControl} from 'react-bootstrap'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  isLogged: state.isLoggedData.isLogged
})

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


class LogForm extends React.Component {
  constructor() {
    super()

    this.state = ({
      isLogged: false,
      login: ''
    })
  }
render() {
  return (

  <form>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Login"
      placeholder="Wpisz login"
    />
    <FieldGroup
      id="formControlsPassword"
      label="Hasło"
      type="password"
      placeholder="Wpisz hasło"
      onChange={
        event => this.setState({
          login: event.target.value
        })
      }
    />
    <Button type="submit">
      Zaloguj
    </Button>


  </form>
  )
}
}
export default connect(mapStateToProps)(LogForm)