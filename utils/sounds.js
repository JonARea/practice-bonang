import {Audio} from 'expo'

import low2 from '../assets/BonangNL-Low2.mp3'
import low1 from '../assets/BonangNL-Low1.mp3'
import low3 from '../assets/BonangNL-Low3.mp3'
import low5 from '../assets/BonangNL-Low5.mp3'
import low6 from '../assets/BonangNL-Low6.mp3'
import mid1 from '../assets/BonangNL-Mid1.mp3'
import mid2 from '../assets/BonangNL-Mid2.mp3'
import mid3 from '../assets/BonangNL-Mid3.mp3'
import high5 from '../assets/BonangNL-High5.mp3'
import high6 from '../assets/BonangNL-High6.mp3'
import high1 from '../assets/BonangNL-High1.mp3'
import high2 from '../assets/BonangNL-High2.mp3'

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
