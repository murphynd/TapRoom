import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

function KegCreateForm(props) {
  return (
    <React.Fragment>
      <h1>New Keg Form
      </h1>
      <ReusableForm
        formSubmissionHandler={handleKegCreateFormSubmission}
        buttonText="Add Keg" />
    </React.Fragment>
  );
  function handleKegCreateFormSubmission(event) {
    event.preventDefault();
    props.onKegCreateCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      pints: 124,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }
}

KegCreateForm.propTypes = {
  onKegCreateCreation: PropTypes.func
};
//creatform
export default KegCreateForm;