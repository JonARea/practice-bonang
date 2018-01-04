import * as types from '../actions/actionTypes'

const initialState = {
  sounds: {},
  names: [],
  elements: []
}

export default slendroReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADED_SLENDRO:
      return {
        sounds: action.sounds,
        names: action.names,
        elements: action.elements
      }
    default:
      return state
  }
}
