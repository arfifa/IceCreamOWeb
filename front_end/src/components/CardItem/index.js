import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';

import { APP_URL } from '../../config/Api'
import './cardItem.css';

const CardItem = (props) => {
  return (
    <Col className="mt-3 col-lg-3 col-md-4 col-sm-6 col-12" >
      <Card className="cardItem">
        <CardImg top src={`${APP_URL}public/${props.itemImage}`} alt="Image Item" style={styles.imageItem} />
        <CardBody>
          <div style={styles.titleItem}>
            <CardTitle><h6>{props.itemName}</h6></CardTitle>
          </div>
          <CardSubtitle style={styles.priceItem}><span>Price: Rp. {props.itemPrice}</span></CardSubtitle>
          <div className="text-right">
            <span style={styles.textRating}>Rating: {props.ratings.toFixed(2)}</span>
          </div>
          <hr />
          <div className="text-right">
            <Link to={`detail_item/${props.idItem}`} className="btn" style={styles.btnItem} >TAMBAH</Link>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

const styles = {
  btnItem: {
    backgroundColor: '#F17880',
    color: '#ffffff'
  },
  titleItem: {
    height: '80px',
  },
  priceItem: {
    color: '#7FB6BA',
    fontSize: '15px',
    fontWeight: '500',
    marginBottom: '5px',
  },
  imageItem: {
    width: '100%',
    height: '220px'
  },
  textRating: {
    color: '#ADADAD',
  }
}

export default CardItem;
