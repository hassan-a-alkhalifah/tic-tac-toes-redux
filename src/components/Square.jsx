import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Square(props) {

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    if(this.state.history.length === 10){
      return 'Cat\'s Game!';
    } else {
      return null;
    }
  }

  function handleSquareClick() {
    console.log(props.test)
    const { dispatch } = props;
    const action = {
      type: 'ADD_MOVE',
      squareNumber: props.squareNumber
    };
    dispatch(action);



    // const updatedSquares = calculateWinner(props.squares);
    // if (calculateWinner(props.squares) === 'Cat\'s Game!') {
    //   const action = {
    //     type: 'SET_WINNER',
    //   };
    // }
  }

  return (
    <button
      className="square"
      onClick= {handleSquareClick}
    >
      {props.test} // target seleted index position
    </button>
  );

}

Square.propTypes = {
  value: PropTypes.any,
  onClick: PropTypes.func.isRequired,
  squareNumber: PropTypes.number,
  squares: PropTypes.array
};

export default connect()(Square);
