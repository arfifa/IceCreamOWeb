import React from 'react';
import { Container, Card, CardTitle, CardText, Table } from 'reactstrap';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';

import { getDetailUser, getUser } from '../../redux/action/user';

import './myAccount.css';
import { Link } from 'react-router-dom';

class MyAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // dataUser: {},
      // dataUserDetail: {}
    }
  }

  async componentDidMount() {
    const { token } = this.props.auth.data
    let tokenBearer = `Bearer ${token}`
    const tokenDecode = jwt.decode(token)
    const id_user = tokenDecode.id_user
    this.props.dispatch(getUser(id_user, {
      headers: {
        'Authorization': tokenBearer
      }
    }))
    this.props.dispatch(getDetailUser(id_user, {
      headers: {
        'Authorization': tokenBearer
      }
    }))
  }

  render() {
    const { dataUser } = this.props.user
    const dataDetailUser = this.props.user.dataDetailUser.result
    console.log(dataDetailUser)


    return (
      <Container >
        <div className="containerMyAccount">
          <h3>Account settings</h3>
          <div className="row mt-3">
            <div className="col-md-6 mb-2">
              <Card body>
                <CardTitle><span className="title">Personal profile</span> | <Link to="/edit_profile">UBAH</Link></CardTitle>
                <CardText>{dataUser[0].fullname}<br />
                  {dataUser[0].email}<br />
                </CardText>
              </Card>
            </div>
            <div className="col-md-6">
              <Card body>
                <CardTitle><span className="title">My Address</span> | <Link to="/add_address">UBAH</Link><br />
                </CardTitle>
                ALAMAT PENGIRIMAN
                <CardText><span>{dataUser[0].fullname}</span><br />
                  {/* <span>{dataDetailUser[0].address}</span><br /> */}
                  {/* <span>{dataDetailUser[0].province} - {dataDetailUser[0].city} - {dataDetailUser[0].district}</span> */}
                </CardText>
              </Card>
            </div>
            <div className="containerHistory col-md-12">
              <Card body>
                <h4>purchase history</h4>
                <Table hover>
                  <thead>
                    <tr>
                      <th>Order Number</th>
                      <th>Date of order</th>
                      <th>Item</th>
                      <th>Total</th>
                      <th>Give a review</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="text-center">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Images</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </div>
        </div >
      </Container >
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.user
  }
}

export default connect(mapStateToProps)(MyAccount)