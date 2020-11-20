import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

function NewItemForm(props) {
  return (
    <React.Fragment>
      <h1>add a new keg
      </h1>
      <ReusableForm
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText="Add Item" />
    </React.Fragment>
  );
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({ name: event.target.name.value, quantity: parseInt(event.target.quantity.value), description: event.target.description.value, id: v4() });
  }
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};
//creatform
export default kegCreateForm;