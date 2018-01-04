import React from 'react'
import {View, Text} from 'react-native'

class Pot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  render() {
    return (
      <View
        style={this.props.style}
        onStartShouldSetResponderCapture={(evt) => true}
        onResponderGrant={(evt) => {
          this.setState({isActive: true})
          this.props.soundElement.playAsync()
        }}
        onResponderTerminationRequest={(evt) => true}
        onResponderRelease={(evt) => {
          this.setState({isActive: false})
        }}
      >
        {!this.state.isActive && (<Text> {this.props.name} </Text>)}
      </View>
    )
  }
}

export default Pot
