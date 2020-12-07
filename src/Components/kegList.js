import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  const { kegList, onKegSelection, onClickingSell } = props;
  return (
    <React.Fragment>
      <div className="card">
        <h1>Tap List</h1>
        <hr />
        {kegList.map((keg) => (
          <Keg
            whenKegClicked={onKegSelection}
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            pints={keg.pints}
            quantity={keg.quantity}
            id={keg.id}
            key={keg.id}
            sellButton={onClickingSell}
            restockButton={props.onClickingRestock}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onClickingSell: PropTypes.func,
  onClickingRestock: PropTypes.func,
};
export default KegList;
