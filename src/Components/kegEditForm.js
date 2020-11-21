
import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function KegEditForm(props) {
  function handleKegEditFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      quantity: parseInt(event.target.quantity.value),
    })
  }
  return (
    <React.Fragment>
      <h1>Edit beer</h1>
      <ReusableForm
        formSubmissionHandler={handleKegEditFormSubmission}
        buttonText="Edit Keg" />
    </React.Fragment >
  );
}

KegEditForm.propTypes = {
  onEditCreation: PropTypes.func
};

export default KegEditForm;