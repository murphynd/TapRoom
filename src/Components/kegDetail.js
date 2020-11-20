
import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingBuy, onClickingRestock } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name} - Stock: {keg.quantity > 0 ? keg.quantity : 'Out of Stock'}</h3>
      <p><em>{keg.description}</em></p>
      <button type="button" className="btn btn-info" onClick={props.onClickingEdit}>Update Keg</button>
      <button type="button" className="btn btn-primary" onClick={() => onClickingDelete(keg.id)}>Close Keg</button>
      {keg.quantity > 0 && // this is an if statement in JSX
        <button type="button" className="btn btn-danger" onClick={() => onClickingBuy(keg.id)}>Buy an Keg</button>
      }
      <button type="button" className="btn btn-info" onClick={() => onClickingRestock(keg.id)}>Restock Keg</button>
      <hr />
    </React.Fragment >
  );

}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};
// update and Delete
export default KegDetail;