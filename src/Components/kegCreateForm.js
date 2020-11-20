import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

function NewkegForm(props) {
  return (
    <React.Fragment>
      <h1>add a new keg
      </h1>
      <ReusableForm
        formSubmissionHandler={handleNewkegFormSubmission}
        buttonText="Add Keg" />
    </React.Fragment>
  );
  function handleNewkegFormSubmission(event) {
    event.preventDefault();
    props.onNewkegCreation({
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

NewkegForm.propTypes = {
  onNewkegCreation: PropTypes.func
};
//creatform
export default kegCreateForm;