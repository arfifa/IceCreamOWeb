import React from 'react';
import { Container, Table, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Alert, Spinner } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { APP_URL_IMAGE } from '../../config/Api';
import { getCart, deleteCart, updateCart } from '../../redux/action/cart';
import { getDetailUser } from '../../redux/action/user';

import { FormCartItem } from '../../components/Form';
import { ButtonDarkGreen } from '../../components/Button';
import './cart.css';

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataCart: [],
      dataDetailUser: {
        success: false,
        return: []
      },
      total_payment: 0,
      id_user: null,
      shipping_cost: 25000
    }
  }

  async componentDidMount() {
    const { token } = this.props.auth.data
    let tokenBearer = `Bearer ${token}`
    const tokenDecode = jwt.decode(token)
    const id_user = tokenDecode.id_user
    await this.props.dispatch(getCart(id_user, {
      headers: {
        'Authorization': tokenBearer
      }
    }))

    this.setState({
      dataCart: this.props.cart.dataCart
    })

    await this.props.dispatch(getDetailUser(id_user, {
      headers: {
        'Authorization': tokenBearer
      }
    }))
    this.setState({
      dataDetailUser: this.props.user.dataDetailUser
    })

    const { dataCart } = this.state
    let total = 0;
    {
      dataCart.map((data) => {
        total += data.price * data.number_of_item
      })
    }

    this.setState({
      total_payment: total
    })
  }

  _handleClickDelete = async (id_cart) => {
    const { token } = this.props.auth.data
    let tokenBearer = `Bearer ${token}`
    await this.props.dispatch(deleteCart(id_cart, {
      headers: {
        'Authorization': tokenBearer
      }
    }))
    this.componentDidMount()
  }


  _handleDelete = (id_cart) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Are you sure?</h1>
            <p>You want to delete this item?</p>
            <button onClick={onClose}>No</button>
            <button onClick={() => {
              this._handleClickDelete(id_cart)
              onClose()
            }}>Yes, Delete it!</button>
          </div>
        )
      }
    })
  };

  _handleAddTotalItem = async (indexOf, id_cart) => {
    const { token } = this.props.auth.data
    let tokenBearer = `Bearer ${token}`
    const number_of_item = this.state.dataCart[indexOf].number_of_item + 1

    await this.props.dispatch(updateCart(id_cart,
      { number_of_item },
      {
        headers: {
          'Authorization': tokenBearer
        }
      }
    ))
    this.componentDidMount()
  }

  _handleDelTotalItem = async (indexOf, id_cart) => {
    const { token } = this.props.auth.data
    let tokenBearer = `Bearer ${token}`
    const number_of_item = this.state.dataCart[indexOf].number_of_item - 1

    await this.props.dispatch(updateCart(id_cart,
      { number_of_item },
      {
        headers: {
          'Authorization': tokenBearer
        }
      }
    ))
    this.componentDidMount()
  }


  render() {
    const { isLoading, isSuccess, isError } = this.props.cart
    const { success } = this.props.cart
    const { dataCart, dataDetailUser, total_payment, shipping_cost } = this.state

    return (
      <Container >
        <div className="containerCart">
          <div className="row px-3">
            <div className="col-md-12 headerTitleCart"><h3>My Items Cart</h3></div>
            {isLoading &&
              < div >
                <Alert color="warning">
                  <Spinner color="dark" /> Loading ...
                </Alert>
              </div>
            }
            {isError &&
              < div >
                <Alert color="danger">
                  <h3>Login first or connection error!</h3>
                </Alert>
              </div>
            }
            {isSuccess && success &&
              <div className="col-lg-8 mb-5 p-0">
                {dataCart.map((d, index) => (
                  <Card className="mb-1">
                    <Table border>
                      <tbody>
                        <th colSpan="3">{d.item_name}</th>
                        <tr>
                          <td><img src={`${APP_URL_IMAGE}${d.images}`} className="imgItems" /></td>
                          <td >Rp. {d.price}</td>
                          <td>
                            <div className="containerFromCartItem">
                              <FormCartItem
                                totalItem={d.number_of_item}
                                addTotal={() => this._handleAddTotalItem(index, d.id_cart)}
                                delTotal={() => this._handleDelTotalItem(index, d.id_cart)}
                              />
                            </div>
                          </td>
                          <td width="180px">Rp. {d.price * d.number_of_item}</td>
                          <td width="40px"><span className="fa fa-trash fa-lg"
                            onClick={() => this._handleDelete(d.id_cart)}
                          ></span></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card>
                ))}
              </div>
            }
            <div className="col-lg-4 px-1">
              <Card className="mb-5">
                <CardBody>
                  <CardTitle style={{ color: "#999" }}>Location</CardTitle>
                  {dataDetailUser.success && dataDetailUser.result.length > 0 ? (
                    <>
                      <CardSubtitle className="textCompleteAddress">
                        <small className="textAddress">
                          <span className="fa fa-map-marker fa-2x mr-1"></span>{dataDetailUser.result[0].province}, {dataDetailUser.result[0].city}, {dataDetailUser.result[0].district}
                        </small>
                      </CardSubtitle> <hr />
                    </>
                  ) : (
                      <>
                        <CardSubtitle className="textCompleteAddress"><small>Please complete your profile in the My Account menu or click below</small><br />
                          <Link to="/add_address"><Button small className="btnAddAddress">Add Address</Button></Link>
                        </CardSubtitle> <hr />
                      </>)
                  }
                  <CardText>
                    <h5>Order Summary</h5>
                    <div className=" row">
                      <div className="orderSummary col-6">
                        <span>Subtotal</span>
                        <span>shipping costs</span>
                        <h5 className="textTotalPayment">Total</h5>
                      </div>
                      <div className="col-6 text-right">
                        <span>Rp. {total_payment}</span><br />
                        <span>Rp. {shipping_cost}</span><hr />
                        <span>Rp. {total_payment + shipping_cost}</span>
                      </div>
                    </div>
                  </CardText>
                  <div className="text-right">
                    <ButtonDarkGreen label="Order Now" size="lg" onClick={() => this._handleAddChart()} />
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </Container >
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    auth: state.auth,
    user: state.user
  }
}

export default connect(mapStateToProps)(Cart);