import { SET_TOOLTIP_COORDS, TOGGLE_TOOLTIP_VISIBILITY } from '../constants/actions'


export const toggleTooltipVisiblity = visibility => ({ type: TOGGLE_TOOLTIP_VISIBILITY, visibility })
export const setTooltipCoords = coords => ({ type: SET_TOOLTIP_COORDS, coords })
