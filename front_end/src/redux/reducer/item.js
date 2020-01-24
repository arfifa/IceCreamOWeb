const initialState = {
  count: 0,
  data: [],
  dataDetailItem: [],
  isLoading: false,
  isError: false,
  isSuccess: true
}

const item = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEM_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'GET_ITEM_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'GET_ITEM_FULFILLED':
      return {
        ...state,
        count: action.payload.data.result.length,
        data: action.payload.data.result,
        isLoading: false,
        isSuccess: true,
        isError: false
      }
    case 'GET_ITEM_BY_ID_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'GET_ITEM_BY_ID_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'GET_ITEM_BY_ID_FULFILLED':
      return {
        ...state,
        dataDetailItem: action.payload.data,
        isLoading: false,
        isSuccess: true,
        isError: false
      }
    default:
      return state
  }
}

export default item