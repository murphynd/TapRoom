
import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function KegEditForm(props) {
  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value,
      quantity: parseInt(event.target.quantity.value),
      description: event.target.description.value
    })
  }
  return (
    <React.Fragment>
      <h1>Edit item</h1>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Edit Keg" />
    </React.Fragment >
  );
}

KegEditForm.propTypes = {
  onEditCreation: PropTypes.func
};

export default KegEditForm;