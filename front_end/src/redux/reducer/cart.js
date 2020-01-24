const initialState = {
  count: 0,
  dataCart: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
  success: false
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CART_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        success: false,
      }
    case 'GET_CART_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        success: false,
      }
    case 'GET_CART_FULFILLED':
      return {
        ...state,
        count: action.payload.data.result.length,
        dataCart: action.payload.data.result,
        success: action.payload.data.success,
        isLoading: false,
        isSuccess: true,
        isError: false
      }
    case 'POST_CART_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false
      }
    case 'POST_CART_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'POST_CART_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false
      }
    case 'DELETE_CART_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false
      }
    case 'DELETE_CART_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'DELETE_CART_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false
      }
    case 'UPDATE_CART_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false
      }
    case 'UPDATE_CART_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'UPDATE_CART_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false
      }
    default:
      return state
  }
}

export default cart;