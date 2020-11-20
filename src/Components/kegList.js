import React from 'react';
import Keg from './keg';
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
            description={keg.description}
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
export default kegList;