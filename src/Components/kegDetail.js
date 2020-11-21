
import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h2>{keg.name} - Stock: {keg.pints > 0 ? keg.pints : 'Out of Stock'}</h2>
    </React.Fragment >
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
};
// update and Delete
export default KegDetail;