import React from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Text, Col, Button, Alert, Spinner } from 'reactstrap';
import { withAlert } from 'react-alert';
import 'font-awesome/css/font-awesome.min.css';
import { connect } from 'react-redux';

import { registerAuth } from '../../redux/action/auth';

import './pendaftaran.css'

class Pendaftaran extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      no_telp: null,
      username: null,
      password: null,
      date_birth: null,
      gender: 0,
      fullname: null,
      email: null,
      id_role: 1,
      is_valid: false,
      dataRegister: {
        success: null
      }
    }
  }

  componentDidMount() {
    this.setState({
      dataRegister: this.props.auth.dataRegister
    })
  }

  _handleRegister = () => {
    const { isError } = this.props.auth
    const { no_telp, username, password, date_birth, gender, fullname, email, id_role, is_valid } = this.state
    if (no_telp !== null && username !== null && password !== null && date_birth !== null && gender != 0 && fullname !== null && email !== null) {
      this.setState({
        is_valid: true
      })
      if (is_valid) {
        this.props.dispatch(registerAuth({ no_telp, username, password, date_birth, gender, fullname, email, id_role }))
        console.log(this.props.auth.dataRegister);

        if (isError) {
          this.setState({
            dataRegister: {}
          })
        }
      }
    } else {
      this.setState({
        is_valid: false
      })
      this.props.alert.show("all forms must be filled!")
    }
  }

  render() {
    const { isLoading, isSuccess, isError } = this.props.auth
    const { is_valid } = this.state
    const { success } = this.props.auth.dataRegister

    return (
      <Container className="p-0">
        <div className="containerRegister">
          <h1 className="col-lg-8 titleRegister">Create account Ice Cream O<hr /></h1>
          <div className="col-md-8 containerFormRegister">
            {isLoading &&
              <div>
                <Alert color="warning">
                  <Spinner color="dark" /> Loading ...
                </Alert>
              </div>
            }
            {isSuccess && success && is_valid &&
              <Alert>
                <h3>registration successful!</h3>
                <p>happy shopping..</p>
              </Alert>
            }
            {isError && is_valid &&
              < Alert color="danger">
                <h3>Registration Failed!</h3>
                <p>Please, check your connection!</p>
              </Alert>
            }
            {success == false && is_valid && isError != true &&
              <Alert color="warning">
                <h3>registration failed, username or email already registered!</h3>
                <p>please register again with a new username and email!</p>
              </Alert>
            }
            <Form className="row" onSubmit={(e) => e.preventDefault()}>
              <div className="col-lg-7">
                <FormGroup>
                  <Label for="no_telp"><small>*Nomor telepon</small></Label>
                  <Input type="text" name="no_telp" id="no_telp" placeholder="Enter your telephone number"
                    onChange={(e) => this.setState({ no_telp: e.target.value })}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="username"><small>*Username</small></Label>
                  <Input type="text" name="username" id="username" placeholder="Username"
                    onChange={(e) => this.setState({ username: e.target.value })}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password"><small>*Password</small></Label>
                  <Input type="password" name="password" id="password" placeholder="at least 6 characters"
                    onChange={(e) => this.setState({ password: e.target.value })}
                  />
                </FormGroup>
                <div className="row">
                  <div className="col-md-8">
                    <FormGroup>
                      <Label for="date_birth"><small>*Date of birth</small></Label>
                      <Input
                        type="date"
                        name="date_birth"
                        id="date_birth"
                        placeholder="Date of birth"
                        onChange={(e) => this.setState({ date_birth: e.target.value })}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-md-4">
                    <FormGroup>
                      <Label for="gender"><small>*Gender</small></Label>
                      <Input type="select" name="gender" id="gender"
                        onChange={(e) => this.setState({ gender: e.target.value })}>
                        <option value={0}>Pilih</option>
                        <option value={1}>Man</option>
                        <option value={2}>Woman</option>
                      </Input>
                    </FormGroup>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-danger">* Make sure you remember your username and password to login to the account</span>
                </div>
              </div>
              <div className="col-lg-5">
                <FormGroup>
                  <Label for="fullname"><small>*Full Name</small></Label>
                  <Input type="text" name="fullname" id="fullname" placeholder="Type Your Fullname"
                    onChange={(e) => this.setState({ fullname: e.target.value })}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email"><small>*Email</small></Label>
                  <Input type="email" name="email" id="email" placeholder="insert your email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </FormGroup>
                <Button className="buttonRegister" size="md" block
                  onClick={this._handleRegister}>
                  REGISTER</Button>
                <div className="registerPrivasi"><small>Dengan memilih "DAFTAR" Saya menyetujui Kebijakan Privasi Ice Cream O</small></div>
                <div class="otherRegister">
                  <small>or, register with</small>
                  <Button outline size="md" block className="buttonRegisterEmail mt-2">Daftar dengan email</Button>
                  <div className="containerOtherRegister">
                    <Button size="md" className="buttonFacebook"><span className="fa fa-google mr-1"></span>Facebook</Button>
                    <Button size="md" className="buttonGoogle"><span className="fa fa-facebook mr-1"></span>Google</Button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </Container >
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default withAlert()(connect(mapStateToProps)(Pendaftaran))