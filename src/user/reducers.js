function reducer(state, action) {
  switch (action.type) {
    case 'fetching':
      return {
        ...state,
        isFetching: action.payload,
      }
    case 'recieve_tokens':
      return {
        ...state,
        ...action.payload,
        isFetching: false,
      }
    case 'delete_tokens':
      return {
        ...state,
        accessToken: null,
        refreshToken: null,
        isFetching: false
      }
    default:
      return state
  }
}

export default reducer