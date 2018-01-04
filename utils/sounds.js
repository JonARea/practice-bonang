import {Audio} from 'expo'

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

const sounds = {low1, low2, low3, low5, low6, mid1, mid2, mid3, high5, high6, high1, high2}

const names = Object.keys(sounds)

const elements = names.map(file => new Audio.Sound())

export default {
  slendro: {
    sounds,
    names,
    elements
  },
  pelog: {
    sounds,
    names,
    elements
  }
}
