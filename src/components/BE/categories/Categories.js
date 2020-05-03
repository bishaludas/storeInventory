import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getCategory, setCurrentCat } from "../../../actions/CategoryActions";
import Preloader from "../../layouts/Preloader";

const Categories = ({
  categories: { categories, current, error, loading },
  getCategory,
  setCurrentCat,
}) => {
  useEffect(() => {
    getCategory();
    // eslint-disable-next-line
  }, []);
  // console.log(categories);
  if (categories === null) {
    return <Preloader></Preloader>;
  }
  return (
    <Fragment>
      <h5>Categories</h5> <hr />
      <a
        className="waves-effect waves-light btn modal-trigger"
        href="#add-cat-modal"
      >
        Add Category
      </a>
      <table className="highlight">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td>
                <Link to={`/category/test`}>{cat.cat_name}</Link>
              </td>
              <td>{cat.is_deleted === true ? "Inactive" : "Active"}</td>

              <td>
                <a
                  href="#edit-cat-modal"
                  className="waves-effect waves-light modal-trigger btn-small mr-2"
                  onClick={() => setCurrentCat(cat)}
                >
                  <i className="tiny material-icons">edit</i>
                </a>
                <a
                  className="waves-effect waves-light modal-trigger red lighten-2 btn-small"
                  href="#delete-cat-modal"
                  onClick={() => setCurrentCat(cat)}
                >
                  <i className="tiny material-icons">delete</i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  categories: state.category,
});

export default connect(mapStateToProps, { getCategory, setCurrentCat })(
  Categories
);
