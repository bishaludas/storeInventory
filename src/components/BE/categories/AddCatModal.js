import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { AddCategory } from "../../../actions/CategoryActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddCatModal = ({ AddCategory }) => {
  const [category, setCategory] = useState("");
  const onsubmit = (e) => {
    e.preventDefault();
    if (category === "") {
      M.toast({ html: "Category cannot be empty!" });
    } else {
      let input = {
        cat_name: category,
      };
      AddCategory(input);
    }
    console.log(category);

    setCategory("");
  };
  return (
    <Fragment>
      <div id="modal1" className="modal ">
        <div className="modal-content">
          <h4 className="mb-3">Add Category</h4>
          <div className="row">
            <div className="input-field">
              <input
                type="text"
                name="message"
                placeholder="Category..."
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />

              <label htmlFor="message" className="active">
                Category Name
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
