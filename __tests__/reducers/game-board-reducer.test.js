import gameBoardReducer from './../../src/reducers/game-board-reducer.js';
import gameBoardDefaultState from './../../src/reducers/game-board-default-state';

describe('gameBoardReducer', () => {
  let action;

  test('Should return default state if no action type is recognized', () => {
    expect(gameBoardReducer({}, { type: null })).toEqual({});
  });

  test('Should add square item, switch XisNext, and increment currentTurn', () => {
    action = {
      type: 'ADD_MOVE',
      squareNumber: 0
    };
    expect(gameBoardReducer(gameBoardDefaultState, action)).toEqual({
      squares: [[null, null, null, null, null, null, null, null, null],["X", null, null, null, null, null, null, null, null]],
      stepNumber: 1,
      xIsNext: false
    });
  });
});
