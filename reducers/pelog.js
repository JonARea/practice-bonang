import * as types from '../actions/actionTypes'

const initialState = {
  sounds: {},
  names: [],
  elements: []
}

export default pelogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADED_PELOG:
      return {
        sounds: action.sounds,
        names: action.names,
        elements: action.elements
      }
    default:
      return state
  }
}
