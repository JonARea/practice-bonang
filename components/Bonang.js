import React from 'react'
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native'
import Pot from './Pot'
import {Audio} from 'expo'
import {TabNavigator} from 'react-navigation'
import BonangPic from '../assets/bonang.png'
import {setUpSoundObject} from '../utils/sounds'


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
    width: '90%',
    overflow: 'visible',
    position: 'absolute'
  },
  low1: {
    height: 70,
    width: 100,
    borderRadius: 50,
    position: 'absolute',
    left: '80%',
    top: '45%'
  },
  low2: {
    height: 80,
    width: 100,
    borderRadius: 50,
    position: 'absolute',
    left: '22%',
    top: '45%'
  },
  low3: {
    height: 80,
    width: 110,
    borderRadius: 50,
    position: 'absolute',
    left: '35%',
    top: '45%'
  },
  low5: {
    height: 80,
    width: 110,
    borderRadius: 50,
    position: 'absolute',
    left: '51%',
    top: '45%'
  },
  low6: {
    height: 80,
    width: 110,
    borderRadius: 50,
    position: 'absolute',
    left: '66%',
    top: '45%'
  },
  mid1: {
    height: 80,
    width: 110,
    borderRadius: 50,
    position: 'absolute',
    left: '6%',
    top: '45%'
  },
  mid2: {
    height: 60,
    width: 90,
    borderRadius: 50,
    position: 'absolute',
    left: '51%',
    top: '25%'
  },
  mid3: {
    height: 60,
    width: 90,
    borderRadius: 50,
    position: 'absolute',
    left: '37%',
    top: '25%'
  },
  high5: {
    height: 60,
    width: 90,
    borderRadius: 50,
    position: 'absolute',
    left: '24%',
    top: '25%'
  },
  high6: {
    height: 60,
    width: 90,
    borderRadius: 50,
    position: 'absolute',
    left: '9%',
    top: '25%'
  },
  high1: {
    height: 60,
    width: 90,
    borderRadius: 50,
    position: 'absolute',
    left: '65%',
    top: '25%'
  },
  high2: {
    height: 60,
    width: 90,
    borderRadius: 50,
    position: 'absolute',
    left: '78%',
    top: '25%'
  }
})

export default BonangScreen

