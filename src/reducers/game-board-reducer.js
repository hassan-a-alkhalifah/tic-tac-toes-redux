import gameBoardDefaultState from './game-board-default-state';

export default ( state = gameBoardDefaultState, action ) => {
  switch(action.type) {
    case 'ADD_MOVE':
      const history = state.squares;
      const current = state.squares[state.squares.length - 1];
      const squares = current.slice();
      squares[action.squareNumber] = state.xIsNext ? 'X' : '0';
      const newHistory = history.concat([squares]);
      const newState = Object.assign({}, state, {
        squares: newHistory,
        xIsNext: !state.xIsNext,
        stepNumber: (state.stepNumber + 1)
      })
      console.log(newState);
      console.log(action);
      return newState;
    default:
      return state;
  }
};

// this.setState({
//   history: history.concat([{
//     squares: squares,
//     stepNumber: history.length,
//     xIsNext: !this.state.xIsNext,
//   }]),
// });
