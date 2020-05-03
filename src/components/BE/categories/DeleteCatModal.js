import React, { Fragment } from "react";
import { connect } from "react-redux";
import { DeleteCategory } from "../../../actions/CategoryActions";
import M from "materialize-css/dist/js/materialize.min.js";

const DeleteCatModal = ({ category: { current }, DeleteCategory }) => {
  const onDelete = () => {
    const data = {
      id: [current.id],
    };
    DeleteCategory(data);
    M.toast({ html: "Category deleted." });
  };
  return (
    <Fragment>
      <div id="delete-cat-modal" className="modal">
        <div className="modal-content">
          <h4>Delete Category</h4>
          <p>Are you sure you want to delete ?</p>

          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat grey  white-text mr-2"
            >
              Cancel
            </a>
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat white-text green"
              onClick={onDelete}
            >
              Confirm
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, { DeleteCategory })(DeleteCatModal);
