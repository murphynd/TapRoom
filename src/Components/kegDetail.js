import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div className="card shadow">
        <h1>Keg Details</h1>
        <p>Name: {keg.name}</p>
        <p>Stock: {keg.pints > 0 ? keg.pints : "Out of Stock"} pints</p>
        <p>Beer Brand: {keg.brand}</p>
        <p>ABV: {keg.abv}%</p>
        <p>Price per pint: {keg.price}</p>
        <p>Number of kegs in stock: {keg.quantity}</p>

        <button
          className="btn btn-outline-info btn-lg btn-block shadow"
          onClick={props.onClickingEdit}
        >
          Update Beer
        </button>
        <button
          className="btn btn-outline-danger btn-lg btn-block shadow"
          onClick={() => onClickingDelete(keg.id)}
        >
          Delete Beer
        </button>
      </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};
// update and Delete
export default KegDetail;
