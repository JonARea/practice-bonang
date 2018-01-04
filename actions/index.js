import * as types from './actionTypes'

//actions

const loading = () => ({
  type: types.LOADING,
  loadingStatus: 'loading'
})

const finishedLoading = () => ({
  type: types.FINISHED_LOADING,
  loadingStatus: 'finished'
})

const loadedSlendro = (sounds, names, elements) => ({
  type: types.LOADED_SLENDRO,
  sounds,
  names,
  elements
})

const loadedPelog = (sounds, names, elements) => ({
  type: types.LOADED_PELOG,
  sounds,
  names,
  elements
})

//thunks

export const loadSlendroThunk = (sounds, names, elements) => dispatch => {
  const loadingElements = elements.map((element, index) => {
    return element.loadAsync(sounds[names[index]], {}, true)
  })
  Promise.all(loadingElements)
    .then(loadedElements => dispatch(loadedSlendro(sounds, names, loadedElements)))
}

export const loadPelogThunk = (sounds, names, elements) => dispatch => {
  const loadingElements = elements.map((element, index) => {
    return element.loadAsync(sounds[names[index]], {}, true)
  })
  Promise.all(loadingElements)
    .then(loadedElements => {
      return dispatch(loadedPelog(sounds, names, loadedElements))
    })
    .then(() => dispatch(finishedLoading()))
    .catch(console.error)
}

export const loadingThunk = () => dispatch => (
  dispatch(loading())
)
