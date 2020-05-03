import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { EditCategory } from "../../../actions/CategoryActions";

const EditCatModal = ({ category: { current }, EditCategory }) => {
  const [catName, setCatName] = useState("");
  const [catDetails, setcatDetails] = useState("");

  useEffect(() => {
    if (current) {
      setCatName(current.cat_name);
      setcatDetails(current.details === null ? "" : current.details);
    }
  }, [current]);

  const onsubmit = (e) => {
    const input = {
      cat_name: catName,
      details: catDetails,
      id: current.id,
    };
    EditCategory(input);
  };
  return (
    <Fragment>
      <div id="edit-cat-modal" className="modal">
        <div className="modal-content">
          <h4 className="mb-3">Edit Category</h4>
          <div className="row">
            <div className="input-field">
              <input
                id="cat-edit"
                type="text"
                name="category"
                value={catName}
                placeholder=""
                onChange={(e) => setCatName(e.target.value)}
              />

              <label htmlFor="cat-edit" className="active">
                Category Name
              </label>
              <span className="cat-error"></span>
            </div>

            <div className="input-field">
              <textarea
                id="textarea-edit"
                name="details"
                value={catDetails}
                placeholder=""
                onChange={(e) => setcatDetails(e.target.value)}
                className="materialize-textarea"
              ></textarea>
              <label htmlFor="textarea-edit" className="active">
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

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, { EditCategory })(EditCatModal);
