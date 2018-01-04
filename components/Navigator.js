import React from 'react'
import {TabNavigator} from 'react-navigation'
import BonangScreen from './Bonang'

const Navigator = TabNavigator({
  Slendro: {screen: BonangScreen},
  Pelog: {screen: BonangScreen},
})

export default Navigator
