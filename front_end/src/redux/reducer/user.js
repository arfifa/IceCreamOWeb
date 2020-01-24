const initialState = {
  dataUser: [],
  dataDetailUser: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
  success: false,
  countDetail: 0,
  countUser: 0
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'GET_DETAIL_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'GET_DETAIL_USER_FULFILLED':
      return {
        ...state,
        dataDetailUser: action.payload.data,
        countDetail: action.payload.data.result.length,
        isLoading: false,
        isSuccess: true,
        isError: false
      }
    case 'GET_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'GET_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'GET_USER_FULFILLED':
      return {
        ...state,
        dataUser: action.payload.data.result,
        countUser: action.payload.data.result.length,
        isLoading: false,
        isSuccess: true,
        isError: false
      }
    default:
      return state
  }
}

export default user;