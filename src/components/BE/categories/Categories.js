import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getCategory } from "../../../actions/CategoryActions";
import Preloader from "../../layouts/Preloader";

const Categories = ({
  categories: { categories, current, error, loading },
  getCategory,
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
      <a className="waves-effect waves-light btn modal-trigger" href="#modal1">
        Add Category
      </a>
      <table className="highlight responsive-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((item) => (
            <tr key={item.id}>
              <td>
                <Link to="#">{item.cat_name}</Link>
              </td>
              <td>
                <span className="green darken-1 chip white-text">
                  {item.is_deleted === true ? "Inactive" : "Active"}
                </span>
              </td>

              <td>
                <a
                  href="#edit-log-modal"
                  className="waves-effect waves-light btn-small mr-2"
                >
                  Edit
                </a>
                <Link
                  to="#"
                  className="waves-effect waves-light red lighten-2 btn-small"
                >
                  Delete
                </Link>
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

export default connect(mapStateToProps, { getCategory })(Categories);
