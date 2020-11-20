import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="card">
        <form onSubmit={props.formSubmissionHandler}>
          <div className="form-group">
            <input
              type='text'
              name='name'
              placeholder='Keg Name' />
          </div>
          <div className="form-group">
            <input
              type='text'
              name='brand'
              placeholder='Brand Name' />
          </div>
          <div className="form-group">
            <input
              type='text'
              name='price'
              placeholder='Price per pint' />
          </div>
          <div className="form-group">
            <input
              type='text'
              name='abv'
              placeholder='ABV' />
          </div>
          <div class="form-group">
            <input
              type='text'
              name='quantity'
              placeholder='number of kegs'
              min="0" />
          </div>
          <button type="button" className="btn btn-primary" type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  );
}
ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;