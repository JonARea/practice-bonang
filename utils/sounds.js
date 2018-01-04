export const setUpSoundObject = (object, file) => {
  try {
    object.loadAsync(file, {}, true)
    object.setOnPlaybackStatusUpdate(status => {
      if (status.didJustFinish) {
        object.pauseAsync()
        object.setPositionAsync(0)
      }
    })
  } catch (err) {
    console.error(err)
  }
}
