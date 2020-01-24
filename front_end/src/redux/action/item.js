import axios from 'axios';
import qs from 'qs';

import { APP_URL } from '../../config/Api';

const url = APP_URL.concat('item')

export const getItem = () => {
  return {
    type: 'GET_ITEM',
    payload: axios.get(url)
  }
}

export const getItemById = (id_item) => {
  return {
    type: 'GET_ITEM_BY_ID',
    payload: axios.get(url.concat(`/${id_item}`))
  }
}