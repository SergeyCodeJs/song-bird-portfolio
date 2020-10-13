import {combineReducers} from 'redux'

import game from './gameReducer'
import birdsData from './birdsDataReducer'


const rootReducer = combineReducers({birdsData, game});

export default rootReducer