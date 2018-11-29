import gameBoardReducer from './game-board-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  moveList : gameBoardReducer
});

export default rootReducer;
