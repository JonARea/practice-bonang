import React from 'react'
import {View, Text} from 'react-native'

const Pot = (props) => (
  <View
    style={props.style}
    onStartShouldSetResponderCapture={(evt) => true}
    onResponderGrant={(evt) => {props.soundElement.playAsync()}}
  >
    <Text> {props.name} </Text>
  </View>
)

export default Pot
