const initialState = {
  data: [],
  dataRegister: [],
  isLoading: false,
  isError: false,
  isSuccess: true
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_AUTH_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'POST_AUTH_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      }
    case 'POST_AUTH_FULFILLED':
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isSuccess: true,
        isError: false,
      }
    case 'DELETE_AUTH_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'DELETE_AUTH_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      }
    case 'DELETE_AUTH_FULFILLED':
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isSuccess: true,
        isError: false,
      }
    case 'POST_REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'POST_REGISTER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      }
    case 'POST_REGISTER_FULFILLED':
      return {
        ...state,
        dataRegister: action.payload.data,
        isLoading: false,
        isSuccess: true,
        isError: false,
      }
    default:
      return state
  }
}

export default auth;