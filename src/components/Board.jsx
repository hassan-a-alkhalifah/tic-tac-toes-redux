import React from 'react';
import Square from './Square.jsx';
import PropTypes from 'prop-types';

function Board(props) {

  function renderSquare(i) {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
        squareNumber={i}
        squares={props.squares}
        test={props.test}
      />
    );
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Board;
