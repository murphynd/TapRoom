import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div ClassName="card">
        <div onClick={() => props.whenKegClicked(props.id)}>
          <h3>{props.name}</h3>
          <h4>Stock: {props.pints > 0 ? props.pints : 'Out of Stock'}</h4>

        </div>
        <button> <p>${props.price}  pint</p> </button>
        <hr />
      </div>
    </React.Fragment >
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  pints: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;