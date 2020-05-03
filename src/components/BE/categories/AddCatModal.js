import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { AddCategory } from "../../../actions/CategoryActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddCatModal = ({ AddCategory }) => {
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    if (category === "") {
      M.toast({ html: "Category cannot be empty!" });
    } else {
      let input = {
        cat_name: category,
        details: details,
      };
      AddCategory(input);
      M.toast({ html: " Category created." });
    }
    setCategory("");
    setDetails("");
  };
  return (
    <Fragment>
      <div id="add-cat-modal" className="modal ">
        <div className="modal-content">
          <h4 className="mb-3">Add Category</h4>
          <div className="row">
            <div className="input-field">
              <input
                id="category"
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />

              <label htmlFor="category">Category Name</label>
              <span className="cat-error"></span>
            </div>

            <div className="input-field">
              <textarea
                id="textarea1"
                name="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="materialize-textarea"
              ></textarea>
              <label htmlFor="textarea1" className="Active">
                Textarea
              </label>
            </div>

            <div className="modal-footer">
              <a
                href="#!"
                onClick={onsubmit}
                className="modal-close waves-effect waves-green btn"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { AddCategory })(AddCatModal);
