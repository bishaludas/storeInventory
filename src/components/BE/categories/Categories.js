import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getCategory } from "../../../actions/CategoryActions";
import Preloader from "../../layouts/Preloader";

const Categories = ({
  categories: { categories, current, error, loading },
  getCategory,
}) => {
  useEffect(() => {
    getCategory();
  }, []);
  // console.log(categories);
  if (categories === null) {
    return <Preloader></Preloader>;
  }
  return (
    <Fragment>
      <table>
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
              <td>{item.cat_name}</td>
              <td>{item.is_deleted}</td>
              <td>{item.cat_name}</td>
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
