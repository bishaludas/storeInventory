import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Category = ({ categories }) => {
  //   console.log(categories);
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
  categories: PropTypes.array.isRequired
};

export default Category;
