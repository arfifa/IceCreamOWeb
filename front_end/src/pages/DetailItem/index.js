import React from 'react';
import { Container, Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader, CardFooter, CardImg, Spinner, Alert, Col } from 'reactstrap';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';

import { getItemById } from '../../redux/action/item';
import { getReview } from '../../redux/action/review';

import { FormCartItem } from '../../components/Form';
import { ButtonLightGreen, ButtonDarkGreen } from '../../components/Button';
import { APP_URL_IMAGE } from '../../config/Api';
import './DetailItem.css';
import { postCart } from '../../redux/action/cart';


class DetailItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataDetailItem: {},
      dataReview: [],
      number_of_item: 1,
      paramsId_item: null,
    }
  }
  async componentDidMount() {
    const { id_item } = this.props.match.params
    this.setState({
      paramsId_item: id_item
    })
    await this.props.dispatch(getItemById(id_item))
    this.setState({
      dataDetailItem: this.props.item.dataDetailItem
    })
    await this.props.dispatch(getReview(id_item))
    this.setState({
      dataReview: this.props.review.dataReview
    })
    await this.props.dispatch(getReview(id_item))
  }

  _handleAddTotalItem() {
    this.setState({
      number_of_item: this.state.number_of_item + 1
    })
  }

  _handleDelTotalItem() {
    this.setState({
      number_of_item: this.state.number_of_item - 1
    })
  }

  _handleAddChart() {
    const { token } = this.props.auth.data
    let tokenBearer = `Bearer ${token}`
    const tokenDecode = jwt.decode(token)

    if (token) {
      const id_user = tokenDecode.id_user
      const { id_item, item_name, price } = this.state.dataDetailItem.result[0]
      const { number_of_item } = this.state
      this.props.dispatch(postCart({ id_item, id_user, item_name, price, number_of_item }, {
        headers: {
          'Authorization': tokenBearer
        }
      }))
      this.props.history.push('/cart')
    } else {
      this.props.history.push('/modal_login')
    }
  }

  render() {
    const { isLoading, isSuccess, isError } = this.props.item
    const { dataDetailItem, dataReview, paramsId_item } = this.state
    const { number_of_item } = this.state
    if (paramsId_item != this.props.match.params.id_item && paramsId_item != null) {
      this.componentDidMount()
    }

    return (
      <Container className="p-1" style={{ backgroundColor: 'white' }}>
        {isLoading &&
          <div>
            <Alert color="warning">
              <Spinner color="dark" /> Loading ...
            </Alert>
          </div>
        }
        {isSuccess && dataDetailItem.success &&
          <>
            <div className="containerItemDetail p-2 mb-2">
              <div className="row">
                <div className="col-md-12">
                  <Card className="mb-3" body>
                    <div className="row">
                      <div className="col-md-4">
                        <img src={`${APP_URL_IMAGE}${dataDetailItem.result[0].images}`} className="imgDetailItem" />
                      </div>
                      <div className="col-md-8">
                        <CardTitle><h3>{dataDetailItem.result[0].item_name}</h3></CardTitle>
                        <StarRatings
                          rating={dataDetailItem.result[0].ratings}
                          starRatedColor="#F2DC11"
                          numberOfStars={5}
                          starDimension="20px"
                          starSpacing="1px"
                        />
                        <CardSubtitle className="mt-3"><h6>Rp. {dataDetailItem.result[0].price}</h6></CardSubtitle>
                        <CardText>{dataDetailItem.result[0].description}</CardText>
                        <div className="containerFromCartItem">
                          <FormCartItem
                            totalItem={number_of_item}
                            addTotal={() => this._handleAddTotalItem()}
                            delTotal={() => this._handleDelTotalItem()} />
                        </div>
                        <div className="text-right">
                          <ButtonDarkGreen label="Order Now" size="lg" />
                          <ButtonLightGreen label="Add to Chart" size="lg" onClick={() => this._handleAddChart()} />
                        </div>
                        <div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 ">
                <Card className=" mb-3">
                  <CardHeader><h3>Review Makanan</h3></CardHeader>
                  <CardBody className="containerReview">
                    {dataReview.map(v => (
                      <Card body outline color="info" className="mb-2" key={v.id_review}>
                        <CardTitle>
                          <StarRatings
                            rating={v.rating}
                            starRatedColor="#F2DC11"
                            numberOfStars={5}
                            starDimension="20px"
                            starSpacing="1px"
                          />
                        </CardTitle>
                        <CardSubtitle><h6>By {v.name}</h6></CardSubtitle><hr />
                        <CardText>Review : {v.review}</CardText><hr />
                        <CardText>Date post : {v.created_on.substring(0, 10)}</CardText>
                      </Card>
                    ))}
                  </CardBody>
                  <CardFooter>
                  </CardFooter>
                </Card>
              </div>
            </div>
            <div className="row containerShowcase mb-5">
              <div className="col-md-12 my-2 px-5">
                <h4>Items in the same category</h4>
              </div>
              {dataDetailItem.showcase.map(d => (
                <Card className="col-lg-2 col-md-3 col-sm-4 mr-2 mb-2 p-0 shadow cardShowcase" key={d.id_item}>
                  <CardImg top width="100%" height="150px" src={`${APP_URL_IMAGE}${d.images}`} alt="Card image cap" />
                  <CardBody>
                    <div style={styles.titleItem}>
                      <CardTitle>{d.item_name}</CardTitle>
                    </div>
                    <CardSubtitle style={styles.priceItem}><span>Price: Rp. {d.price}</span></CardSubtitle>
                    <div>
                      <span style={styles.textRating}>Rating : </span>
                      <StarRatings
                        rating={d.ratings}
                        starRatedColor="#F2DC11"
                        numberOfStars={5}
                        starDimension="10px"
                        starSpacing="1px"
                      />
                    </div>
                    <hr />
                    <div className="text-right">
                      <Link to={`/detail_item/${d.id_item}`} className="btn" style={styles.btnItem} >TAMBAH</Link>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </>}
        {
          isError &&
          < div >
            <Alert color="danger">
              <h1>Connection failed!</h1>
            </Alert>
          </div>
        }
      </Container >
    )
  }
}


const styles = {
  btnItem: {
    backgroundColor: '#F17880',
    color: '#ffffff'
  },
  titleItem: {
    height: '80px',
    fontSize: '14px',
  },
  priceItem: {
    color: '#7FB6BA',
    fontSize: '12px',
    fontWeight: '500',
    marginBottom: '5px',
  },
  imageItem: {
    width: '100%',
    height: '220px'
  },
  textRating: {
    color: '#ADADAD',
    fontSize: '11px',
  },
  containerFooterReview: {
    margin: 'auto'
  }
}

const mapStateToProps = state => {
  return {
    item: state.item,
    review: state.review,
    auth: state.auth
  }
}


export default connect(mapStateToProps)(DetailItem)

