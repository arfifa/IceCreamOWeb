import React from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Text, Col } from 'reactstrap';

class ContactUs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nama: '',
      email: '',
      pesan: '',
      tampil: ''
    }
  }

  handleName = (event) => {
    this.setState({
      nama: event.target.value
    })
  }

  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePesan = (event) => {
    this.setState({
      pesan: event.target.value
    })
  }

  tampildata = () => {
    this.setState({
      tampil: <p>
        {this.state.nama}<br />
        {this.state.email}<br />
        {this.state.pesan}<br />
      </p>
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={(e) => e.preventDefault()}>
              <FormGroup>
                <Label for="nama">nama</Label>
                <Input type="text" name="nama" id="nama" placeholder="nama" onChange={this.handleName} />
              </FormGroup>
              <FormGroup>
                <Label for="email">email</Label>
                <Input type="email" name="email" id="email" placeholder="email" onChange={this.handleEmail} />
              </FormGroup>
              <FormGroup>
                <Label for="pesan">Pesan</Label>
                <Input type="text" name="pesan" id="pesan" placeholder="pesan" onChange={this.handlePesan} />
              </FormGroup>
              <button onClick={this.tampildata}>tampildata</button>
            </Form>
          </Col>
        </Row>
        <Row>
          {this.state.tampil}
        </Row>

      </Container>
    )
  }
}

export default ContactUs