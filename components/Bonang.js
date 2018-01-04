import React from 'react'
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native'
import {Audio} from 'expo'
import {TabNavigator} from 'react-navigation'
import BonangPic from '../assets/bonang.png'
import {setUpSoundObject} from '../utils/sounds'

import low1 from '../assets/BonangNL-Low1.wav'
import low2 from '../assets/BonangNL-Low2.wav'
import low3 from '../assets/BonangNL-Low3.wav'
import low5 from '../assets/BonangNL-Low5.wav'
import low6 from '../assets/BonangNL-Low6.wav'
import mid1 from '../assets/BonangNL-Mid1.wav'
import mid2 from '../assets/BonangNL-Mid2.wav'
import mid3 from '../assets/BonangNL-Mid3.wav'
import high5 from '../assets/BonangNL-High5.wav'
import high6 from '../assets/BonangNL-High6.wav'
import high1 from '../assets/BonangNL-High1.wav'
import high2 from '../assets/BonangNL-High2.wav'

const audioFileArray = [low1, low2, low3, low5, low6, mid1, mid2, mid3, high5, high6, high1, high2]

const soundElements = audioFileArray.map(file => new Audio.Sound())

soundElements.forEach((element, index) => {
  try {
    element.loadAsync(audioFileArray[index], {}, true)
    element.setOnPlaybackStatusUpdate(status => {
      if (status.didJustFinish) {
        element.pauseAsync()
        element.setPositionAsync(0)
      }
    })
  } catch (err) {
    console.error(err)
  }
})

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

