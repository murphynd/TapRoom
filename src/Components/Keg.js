import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div ClassName="card">
        <div onClick={() => props.whenKegClicked(props.id)}>
          {props.name}
          {props.brand}
          Stock: {props.pints > 0 ? props.pints : "Out of Stock"}
        </div>
        <button
          className="btn btn-danger"
          onClick={() => props.sellButton(props.id)}
        >
          ${props.price} pint
        </button>
        <button
          className="btn btn-danger"
          onClick={() => props.restockButton(props.id)}
        >
          Restock
        </button>
        <hr />
      </div>
    </React.Fragment>
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
  onClickingBuy: PropTypes.func,
  whenKegClicked: PropTypes.func,
  sellButton: PropTypes.func,
};

export default Keg;
