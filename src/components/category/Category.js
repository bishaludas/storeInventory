import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCategory } from "../../actions/CategoryActions";
import Preloader from "../layouts/Preloader";

const Category = ({ categories: { categories, loading }, getCategory }) => {
  useEffect(() => {
    if (categories === null) {
      getCategory();
    }
    // eslint-disable-next-line
  }, []);

  if (loading || categories == null) {
    return (
      <Fragment>
        <Preloader />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className="row">
        <div className="co sm12">
          <h4>Categories</h4>
          <table className="highlight">
            <thead>
              <tr>
                <th>Category Name</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {categories.map(cat => (
                <tr key={cat.id}>
                  <td>{cat.cat_name}</td>
                  <td>{cat.cat_name}</td>
                  <td>{cat.cat_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

Category.prototype = {
  categories: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  categories: state.category
});

export default connect(mapStateToProps, { getCategory })(Category);
