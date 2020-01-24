const initialState = {
  count: 0,
  dataReview: [],
  isLoading: false,
  isError: false,
  isSuccess: true
}

const review = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_REVIEW_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }
    case 'GET_REVIEW_REJECTED':
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      }
    case 'GET_REVIEW_FULFILLED':
      return {
        ...state,
        count: action.payload.data.result.length,
        dataReview: action.payload.data.result,
        isLoading: false,
        isSuccess: true,
        isError: false
      }
    default:
      return state
  }
}

export default review;