import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Square(props) {

  function handleSquareClick() {
    const { dispatch } = props;
    const action = {
      type: 'ADD_MOVE',
      squareNumber: props.squareNumber
    };
    dispatch(action);
  }

  return (
    <button
      className="square"
      onClick= {handleSquareClick}
    >
      {props.value}
    </button>
  );

}

Square.propTypes = {
  value: PropTypes.any,
  onClick: PropTypes.func.isRequired
};

export default connect()(Square);
