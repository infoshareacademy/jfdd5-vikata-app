/**
 * Created by rafalmiler on 12.01.17.
 */
import React from 'react'
import {Button, Modal, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'
import {connect} from 'react-redux'
import LogForm from './LogForm'

const mapStateToProps = state => ({
  isLogged: state.logData.isLogged
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

const loginForm = (
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
);

class LoginPanelView extends React.Component {
  constructor() {
    super()

    this.state = ({
      show: false
    })
  }



  render() {
    let close = () => this.setState({ show: false});

    return (
      <div className="modal-container">
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true})}
        >
          Zaloguj się
        </Button>


        {this.state.show === true ? <LogForm closeModal={() => this.setState({ show: false})}/> : null }
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginPanelView)