import { SET_TOOLTIP_COORDS, TOGGLE_TOOLTIP_VISIBILITY } from '../constants/actions'
import { Map } from 'immutable'

const initialState = Map({
  tooltipCoords: {
    x: 0,
    y: 0
  },
  tooltipVisible: false
})


export default function chart(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_TOOLTIP_VISIBILITY:
      const { visibility } = action
      return state.set('tooltipVisible', visibility)

    case SET_TOOLTIP_COORDS:
      const { coords } = action
      return state.set('tooltipCoords', coords)

    default:
      return state
  }
}
