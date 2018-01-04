import React from 'react'
import {View, Text} from 'react-native'

const Pot = (props) => (
  <View
    style={props.style}
    onStartShouldSetResponderCapture={(evt) => true}
    onResponderGrant={(evt) => {
      props.soundElement.setPositionAsync(0)
      props.soundElement.playAsync()
    }}
    onResponderTerminationRequest={(evt) => true}
  >
    <Text> {props.name} </Text>
  </View>
)

export default Pot
