import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Sidenav = () => {
  return (
    <Fragment>
      <div className="col s2 pl-0">
        <ul className="das-nav">
          <li>
            <Link to="/dashboard" className="das-item">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/be-categories" className="das-item">
              Categories
            </Link>
          </li>

          <li>
            <Link to="/be-items" className="das-item">
              Items
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Sidenav;
