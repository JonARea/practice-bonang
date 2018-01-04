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

  elements.forEach((element, index) => {
    element.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        element.pauseAsync()
        element.setPositionAsync(0)
      }
    })
    element.loadAsync(sounds[names[index]], {}, true)
  })
  Promise.all(elements)
    .then(loadedElements => dispatch(loadedSlendro(sounds, names, loadedElements)))
    .then(() => dispatch(finishedLoading()))
    .catch(console.error)
}

export const loadPelogThunk = (sounds, names, elements) => dispatch => {
  elements.forEach((element, index) => {
    element.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        element.pauseAsync()
        element.setPositionAsync(0)
      }
    })
    element.loadAsync(sounds[names[index]], {}, true)
  })
  Promise.all(elements)
    .then(loadedElements => dispatch(loadedPelog(sounds, names, loadedElements)))
    .then(() => dispatch(finishedLoading()))
    .catch(console.error)
}

export const loadingThunk = () => dispatch => (
  dispatch(loading())
)
