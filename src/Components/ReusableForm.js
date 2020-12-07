import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="card shadow">
        <form onSubmit={props.formSubmissionHandler}>
          <label>Name of Beer</label>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Keg Name"
              defaultValue={props.name ? props.name : ""}
            />
          </div>
          <label>Brand of Beer</label>
          <div className="form-group">
            <input
              type="text"
              name="brand"
              placeholder="Brand Name"
              defaultValue={props.brand ? props.brand : ""}
            />
          </div>
          <label>Price</label>
          <div className="form-group">
            <input
              type="text"
              name="price"
              placeholder="Price per pint"
              defaultValue={props.price ? props.price : ""}
            />
          </div>
          <label>ABV</label>
          <div className="form-group">
            <input
              type="text"
              name="abv"
              placeholder="abv"
              defaultValue={props.abv ? props.abv : ""}
            />
          </div>
          <label>Number of Kegs</label>
          <div className="form-group">
            <input
              type="text"
              name="quantity"
              placeholder="quantity"
              min="0"
              defaultValue={props.quantity ? props.quantity : "0"}
            />
          </div>
          <div className="form-group"></div>
          <button className="btn btn-primary shadow" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
