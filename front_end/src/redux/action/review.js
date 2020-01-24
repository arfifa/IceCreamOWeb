import axios from 'axios';
import qs from 'qs';

import { APP_URL } from '../../config/Api';

const url = APP_URL.concat('review')

export const getReview = (id_item) => {
  return {
    type: 'GET_REVIEW',
    payload: axios.get(url.concat(`/${id_item}`))
  }
}