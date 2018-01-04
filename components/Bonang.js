import React from 'react'
import {View, Image, Text} from 'react-native'
import Pot from './Pot'
import {TabNavigator} from 'react-navigation'
import BonangPic from '../assets/bonang.png'
import stylesheet from '../styles/slendro'
import {connect} from 'react-redux'


const BonangScreen = (props) => (
  <View style={stylesheet.container}>
    <Image
      source={BonangPic}
      style={stylesheet.bonang}
    />
    {
      props.elements.map((element, index) => (
        <Pot
          key={index}
          style={stylesheet[props.names[index]]}
          soundElement={element}
          name={props.names[index]}
        />
      )
    )}

  </View>
)

const mapState = (state) => ({
  names: state.slendro.names,
  elements: state.slendro.elements
})

export default connect(mapState, null)(BonangScreen)

