import React from 'react'
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native'
import {Audio} from 'expo'
import {TabNavigator} from 'react-navigation'
import BonangPic from '../assets/bonang.png'

import low1 from '../assets/BonangNL-Low1.wav'
import low2 from '../assets/BonangNL-Low2.wav'

const low1Sound = new Audio.Sound();
const low2Sound = new Audio.Sound();
  try {
    low1Sound.loadAsync(low1, {}, true)
    low1Sound.setOnPlaybackStatusUpdate(status => {
      if (status.didJustFinish) {
        low1Sound.pauseAsync()
        low1Sound.setPositionAsync(0)

      }
    })
  } catch (err) {
    console.error(err)
  }

  try {
    low2Sound.loadAsync(low2, {}, true)
    low2Sound.setOnPlaybackStatusUpdate(status => {
      if (status.didJustFinish) {
        low2Sound.pauseAsync()
        low2Sound.setPositionAsync(0)

      }
    })
  } catch (err) {
    console.error(err)
  }


class BonangScreen extends React.Component {

  render() {

      return (<View style={styles.container}>
        <Image
          source={BonangPic}
          style={styles.bonang}
        />
        <View

         style={styles.low1}
         onStartShouldSetResponderCapture={(evt) => true}
         onResponderGrant={(evt) => {low1Sound.playAsync()}}
        >
         <Text> Low 1 </Text>
       </View>

       <View

         style={styles.low2}
         onStartShouldSetResponderCapture={(evt) => true}
         onResponderGrant={(evt) => {low2Sound.playAsync()}}
        >
         <Text> Low 1 </Text>
       </View>
      </View>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bonang: {
    width: 700,
    overflow: 'visible',
    position: 'absolute'
  },
  low1: {
    height: 80,
    width: 120,
    borderWidth: 2,
    borderRadius: 50,
    position: 'relative',
    left: 290,
    top: 60
  },
  low2: {
    height: 80,
    width: 110,
    borderWidth: 2,
    borderRadius: 50,
    position: 'relative',
    left: -170,
    top: -20
  }
})

export default BonangScreen

