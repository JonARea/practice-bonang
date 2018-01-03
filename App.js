import React from 'react'
import {TabNavigator} from 'react-navigation'
import StartScreen from './components/Start'
import BonangScreen  from './components/Bonang'

const App = TabNavigator({
  Start: {
    screen: StartScreen,
  },
  Bonang: {
    screen: BonangScreen,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});


export default App
