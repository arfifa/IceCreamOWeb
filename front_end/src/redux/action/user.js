import axios from 'axios';
import qs from 'qs';

import { APP_URL } from '../../config/Api';

const url = APP_URL.concat('user')

export const getDetailUser = (data, header) => {
  return {
    type: 'GET_DETAIL_USER',
    payload: axios.get(url.concat(`/detail_user/${data}`), header)
  }
}

export const getUser = (data, header) => {
  return {
    type: 'GET_USER',
    payload: axios.get(url.concat(`/${data}`), header)
  }
}

// export const deleteAuth = (data, header) => {
//   return {
//     type: 'DELETE_AUTH',
//     payload: axios.delete(url.concat(`/logout/${data}`), header)
//   }
// }

// export const registerAuth = (data) => {
//   return {
//     type: 'POST_REGISTER',
//     payload: axios.post(url.concat(`/register`), qs.stringify(data))
//   }
// }
