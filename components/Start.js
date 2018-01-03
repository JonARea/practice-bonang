import React from 'react'
import {Button} from 'react-native'
import {TabNavigator} from 'react-navigation'

class StartScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Bonang Tab"
        onPress={() => navigate('Bonang')}
      />
    );
  }
}

export default StartScreen
