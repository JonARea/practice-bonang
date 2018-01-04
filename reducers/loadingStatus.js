import * as types from '../actions/actionTypes'

const initialState = 'initialized'

export default loadingStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FINISHED_LOADING:
      return action.loadingStatus
    case types.LOADING:
      return action.loadingStatus

    default:
      return state
  }
}
