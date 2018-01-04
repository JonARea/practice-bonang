import React from 'react'
import {Button, Text} from 'react-native'
import {connect} from 'react-redux'
import Navigator from './Navigator'
import sounds from '../utils/sounds'
import {loadSlendroThunk, loadPelogThunk, loadingThunk} from '../actions'

class StartScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingStatus: this.props.loadingStatus
    }
  }

  componentDidMount() {
    this.props.loadSlendro(sounds.slendro)
    this.props.loadPelog(sounds.pelog)
    console.log(this.state.loadingStatus)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loadingStatus !== this.props.loadingStatus) {
      this.setState({loadingStatus: nextProps.loadingStatus})
    }
  }

  render() {
    return (
      this.state.loadingStatus === 'finished' ?
        <Navigator /> :
      this.state.loadingStatus === 'loading' ?
        <Text>Loading</Text>  :
        (<Text>
          This is the start screen
          Status:{this.props.loadingStatus}
        </Text>
        )
    )
  }
}

const mapState = state => ({
  loadingStatus: state.loadingStatus
})

const mapProps = (dispatch) => ({
  loadSlendro({sounds, names, elements}) {
    dispatch(loadSlendroThunk(sounds, names, elements))
  },

  loadPelog({sounds, names, elements}) {
    dispatch(loadPelogThunk(sounds, names, elements))
  },
  isLoading() {
    dispatch(loadingThunk())
  }
})

export default connect(mapState, mapProps)(StartScreen)
