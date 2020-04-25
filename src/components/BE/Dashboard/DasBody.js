import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getDashboard } from "../../../actions/DashboardAction";
import Preloader from "../../layouts/Preloader";

const DasBody = ({
  dashboard: { cat_count, items_count, cat_details, loading },
  getDashboard,
}) => {
  useEffect(() => {
    getDashboard();
    // eslint-disable-next-line
  }, []);

  if (loading || cat_details === null) {
    return (
      <Fragment>
        <Preloader></Preloader>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <div className="row">
        <div className="col s4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Categories Count : {cat_count}</span>
              <p>Total number of categoties availale in inventory.</p>
            </div>
            <div className="card-action">
              <a href="/">List</a>
              <a href="/">Add</a>
            </div>
          </div>
        </div>

        <div className="col s4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Items Count : {items_count}</span>
              <p>Total number of items available in inventory.</p>
            </div>
            <div className="card-action">
              <a href="/">List</a>
              <a href="/">Add</a>
            </div>
          </div>
        </div>

        <div className="col s4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Order Count : {items_count}</span>
              <p>Total number of order request in inventory.</p>
            </div>
            <div className="card-action">
              <a href="/">List</a>
              <a href="/">Add</a>
            </div>
          </div>
        </div>

        <div className="col s4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Delivery Count : {items_count}</span>
              <p>Total number of items delivered.</p>
            </div>
            <div className="card-action">
              <a href="/">List</a>
              <a href="/">Add</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, { getDashboard })(DasBody);
