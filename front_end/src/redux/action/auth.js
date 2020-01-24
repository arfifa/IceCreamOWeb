import axios from 'axios';
import qs from 'qs';

import { APP_URL } from '../../config/Api';

const url = APP_URL.concat('user')

export const postAuth = (data) => {
  return {
    type: 'POST_AUTH',
    payload: axios.post(url.concat(`/login`), qs.stringify(data))
  }
}

export const deleteAuth = (data, header) => {
  return {
    type: 'DELETE_AUTH',
    payload: axios.delete(url.concat(`/logout/${data}`), header)
  }
}

export const registerAuth = (data) => {
  return {
    type: 'POST_REGISTER',
    payload: axios.post(url.concat(`/register`), qs.stringify(data))
  }
}
