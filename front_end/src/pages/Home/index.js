import React from 'react';
import {
  Container,
  Row,
  Col,
  Alert,
  Spinner,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';

import { getItem } from '../../redux/action/item';
import './home.css';
import CardItem from '../../components/CardItem';
import CarouselItemIceCream from '../../components/CarouselItemIceCream';
import { Search } from '../../components/Form';
import { DropdownSearchBy, DropdownSortBy } from '../../components/DropdownSearch';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      searchBy: 1,
      rating: 5,
      lowerPrice: 0,
      heighestPrice: 0,
    }
  }

  componentDidMount() {
    this.props.dispatch(getItem())
    this.setState({
      data: this.props.item.data
    })
  }

  searchBy = (id_search) => {
    this.setState({
      searchBy: id_search
    })
  }

  changeRating = (newRating) => {
    this.setState({
      rating: newRating
    })
  }

  render() {
    const { isLoading, isError, isSuccess } = this.props.item
    const { searchBy, rating, lowerPrice, heighestPrice } = this.state
    return (
      <Container style={styles.containerMenu}>
        {isLoading &&
          <div>
            <Alert color="warning">
              <Spinner color="dark" /> Loading ...
            </Alert>
          </div>
        }
        {isSuccess &&
          <>
            <CarouselItemIceCream />
            <div className="containerSearch">
              <Col className='col-md-7' style={styles.navSearch}>
                <p className="textSearch">Search Ice Cream & Cake</p>
                <div className="mb-1 lineSearch" >
                  <div className="mr-1">
                    <DropdownSearchBy searchBy={(id_search) => this.searchBy(id_search)} />
                  </div>
                  <div className="fromSearch mr-auto">
                    {searchBy === 1 && <Search />}
                    {searchBy === 2 && <StarRatings
                      rating={rating}
                      starRatedColor="#7FB6BA"
                      changeRating={(newRating) => this.changeRating(newRating)}
                      numberOfStars={5}
                      starDimension="40px"
                      starSpacing="20px"
                    />}
                    {searchBy === 3 &&
                      <>
                        <div className="row">
                          <div className="col-md-5">
                            <FormGroup>
                              <Input type="number" placeholder={0}
                                onChange={(e) => this.setState({
                                  lowerPrice: e.target.value
                                })}
                              />
                            </FormGroup>
                          </div>
                          {'-'}
                          <div className="col-md-5">
                            <FormGroup>
                              <Input type="text" placeholder={1000000}
                                onChange={(e) => this.setState({ heighestPrice: e.target.value })}
                              />
                            </FormGroup>
                          </div>
                        </div>
                      </>
                    }

                  </div>
                  <div>
                    <DropdownSortBy />
                  </div>
                </div>
              </Col>
            </div>
            <Row className="p-2">
              {this.props.item.data.map(v => (
                <CardItem key={v.id_item} idItem={v.id_item} itemName={v.item_name} itemImage={v.images} itemPrice={v.price} ratings={v.ratings} />
              ))}
            </Row>
          </>
        }
        {isError &&
          < div >
            <Alert color="danger">
              <h1>Connection failed!</h1>
            </Alert>
          </div>
        }
      </Container>
    )
  }
}

const styles = {
  containerMenu: {
    backgroundColor: '#ffffff',
    padding: '5px',
    paddingBottom: '70px',
  },
  navSearch: {
    margin: 'auto'
  },
  pagination: {
    margin: 'auto'
  }
}

const mapStateToProps = state => {
  return {
    item: state.item
  }
}

export default connect(mapStateToProps)(Home);