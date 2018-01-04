import React from 'react'
import {Button, Text} from 'react-native'
import Navigator from './Navigator'


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

  } catch (err) {
    console.error(err)
  }
})


class StartScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      finishedLoading: false,
      go: false
    }
  }

  componentDidMount() {

  }

  render() {
    return this.state.go ?
              (<Navigator />) :
           this.state.finishedLoading ?
              (<Button
                title="Practice"
                onPress={() => this.setState({go: true})}
              />) :
              (<Text>Loading</Text>)

  }
}

export default StartScreen
