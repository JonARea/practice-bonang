import React from 'react'
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native'
import Pot from './Pot'
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

const audioFileObject = {low1, low2, low3, low5, low6, mid1, mid2, mid3, high5, high6, high1, high2}

const fileNames = Object.keys(audioFileObject)

const soundElements = fileNames.map(file => new Audio.Sound())

soundElements.forEach((element, index) => {
  try {
    element.loadAsync(audioFileObject[fileNames[index]], {}, true)
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

const BonangScreen = () => (
  <View style={styles.container}>
    <Image
      source={BonangPic}
      style={styles.bonang}
    />
    {soundElements.map((element, index) => (
        <Pot
          key={index}
          style={styles[fileNames[index]]}
          soundElement={element}
          name={fileNames[index]}
        />
      )
    )}

  </View>
)

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
    height: 70,
    width: 100,
    borderWidth: 2,
    borderRadius: 50,
    position: 'absolute',
    left: 640,
    top: 140
  },
  low2: {
    height: 80,
    width: 100,
    borderWidth: 2,
    borderRadius: 50,
    position: 'absolute',
    left: 180,
    top: 140
  },
  low3: {
    height: 80,
    width: 110,
    borderWidth: 2,
    borderRadius: 50,
    position: 'absolute',
    left: 300,
    top: 140
  },
  low5: {
    height: 80,
    width: 110,
    borderWidth: 2,
    borderRadius: 50,
    position: 'absolute',
    left: 420,
    top: 140
  },
  low6: {
    height: 80,
    width: 110,
    borderWidth: 2,
    borderRadius: 50,
    position: 'absolute',
    left: 530,
    top: 140
  },
  mid1: {
    height: 80,
    width: 110,
    borderWidth: 2,
    borderRadius: 50,
    position: 'absolute',
    left: 65,
    top: 140
  },
  mid2: {
    height: 60,
    width: 90,
    borderWidth: 2,
    borderRadius: 50,
    position: 'absolute',
    left: 530,
    top: 80
  },
  mid3: {
    height: 60,
    width: 90,
    borderWidth: 2,
    borderRadius: 50,
    position: 'absolute',
    left: 410,
    top: 80
  },
  high5: {
    height: 60,
    width: 90,
    borderWidth: 2,
    borderRadius: 50,
    position: 'absolute',
    left: 300,
    top: 80
  },
  high6: {
    height: 60,
    width: 90,
    borderWidth: 2,
    borderRadius: 50,
    position: 'absolute',
    left: 200,
    top: 80
  },
  high1: {
    height: 60,
    width: 90,
    borderWidth: 2,
    borderRadius: 50,
    position: 'absolute',
    left: 90,
    top: 80
  },
  high2: {
    height: 60,
    width: 90,
    borderWidth: 2,
    borderRadius: 50,
    position: 'absolute',
    left: 630,
    top: 80
  }
})

export default BonangScreen

