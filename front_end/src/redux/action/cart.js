import axios from 'axios';
import qs from 'qs';

import { APP_URL } from '../../config/Api';

const url = APP_URL.concat('cart')

export const getCart = (data, header) => {
  return {
    type: 'GET_CART',
    payload: axios.get(url.concat(`/${data}`), header)
  }
}

export const postCart = (data, header) => {
  return {
    type: 'POST_CART',
    payload: axios.post(url.concat(`/insert`), qs.stringify(data), header)
  }
}

export const deleteCart = (data, header) => {
  return {
    type: 'DELETE_CART',
    payload: axios.delete(url.concat(`/delete/${data}`), header)
  }
}

export const updateCart = (data, dataValue, header) => {
  console.log(data);
  console.log(dataValue);
  console.log(header);

  return {
    type: 'UPDATE_CART',
    payload: axios.put(url.concat(`/update/${data}`), qs.stringify(dataValue), header)
  }
}
