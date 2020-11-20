import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <div className="card">
        <h1>Tap Room</h1>
        <hr />
        {props.kegList.map((keg) =>
          <Keg
            whenKegClicked={props.onKegSelection}
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            pints={keg.pints}
            quantity={keg.quantity}
            id={keg.id}
            key={keg.id} />
        )}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};
export default KegList;